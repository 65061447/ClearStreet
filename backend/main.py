from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Bangkok Waste Prediction API")

# Allow CORS from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = joblib.load("random_forest_reg_model.pkl")

# Load reference numeric features per district
reference_df = pd.read_csv("df_waste_reference.csv")  # columns like District_Khlong_Toei, Population, area_dis, Population_Density

# Load X_train columns
X_COLUMNS = joblib.load("X_train_columns.pkl")  # columns used in training

class PredictionRequest(BaseModel):
    district: str  # Example: "Khlong Toei"
    year: int
    month: int
    day: int

def generate_7day_prediction(district_name, year, month, day):
    results = []
    for i in range(7):
        try:
            date_obj = datetime.date(year, month, day) + datetime.timedelta(days=i)
        except ValueError:
            continue

        # Create empty row
        input_df = pd.DataFrame(0, index=[0], columns=X_COLUMNS)

        # Fill numeric features
        district_col = next((col for col in X_COLUMNS if col.startswith("District_") and district_name in col), None)
        if not district_col:
            continue
        input_df[district_col] = 1

        district_ref = reference_df[[c for c in reference_df.columns if c.startswith("District_") and district_name in c]]
        # fallback to first row if exact match not found
        if district_ref.empty:
            ref_row = reference_df.iloc[0]
        else:
            ref_row = reference_df.iloc[0]

        for col in ["Population", "area_dis", "Population_Density"]:
            if col in input_df.columns:
                input_df[col] = ref_row.get(col, 0)

        # Temporal features
        input_df["day_of_week"] = date_obj.weekday()
        input_df["day_of_year"] = date_obj.timetuple().tm_yday
        input_df["week_of_year"] = date_obj.isocalendar()[1]
        input_df["quarter"] = (date_obj.month - 1) // 3 + 1
        input_df["is_weekend"] = 1 if date_obj.weekday() >= 5 else 0
        input_df["Holiday"] = 1 if date_obj.weekday() >= 5 else 0
        input_df["Year_Encoded"] = date_obj.year - 2012

        predicted = model.predict(input_df)[0]
        results.append({"date": date_obj.isoformat(), "predicted": float(predicted)})
    return results

@app.post("/predict")
def predict_waste(req: PredictionRequest):
    # 7-day prediction for selected year
    prediction = generate_7day_prediction(req.district, req.year, req.month, req.day)

    # 7-day historical prediction for last year
    historical = generate_7day_prediction(req.district, req.year - 1, req.month, req.day)

    # Calculate total waste and daily average for selected year
    total_waste = sum(p["predicted"] for p in prediction)
    daily_avg = total_waste / len(prediction) if prediction else 0

    return {
        "district": req.district,
        "year": req.year,
        "month": req.month,
        "day": req.day,
        "total_waste_ton": total_waste,
        "daily_avg_ton": daily_avg,
        "prediction_7day": prediction,
        "historical_7day": historical
    }
