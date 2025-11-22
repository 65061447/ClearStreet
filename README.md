# Welcome to My Smart City Project

## Project info

**URL**: https://65061447.github.io/ClearStreet/

## CLEAR STREET – Smart City Waste Prediction System

CLEAR STREET is a smart city initiative designed to **predict daily waste generation** in Bangkok using data analytics and machine learning.  
The system improves waste management efficiency, supports policy planning, and reduces environmental impact through accurate forecasting.

---

## 📌 Problem Statement

Bangkok currently faces several waste management challenges:

### 1. Massive Daily Waste Volume  
- Producing **8,700–10,000 tons/day**, with an increasing trend.

### 2. Inefficient Sorting & Disposal  
- Landfills and incinerators cannot process the daily waste volume fast enough.  
- Leads to overflow and environmental impact.

### 3. Poor Collection Planning  
- Waste amount varies by **district, weekday, holidays, and festivals**.  
- Results in misaligned routes, overloaded collection points, and increased costs.

---

## 🎯 Project Goals & Benefits

- Optimize **waste collection schedules**  
- Adapt routes for **holidays and festivals**  
- Improve **resource management**  
- Support **data-driven policy decisions**  
- Reduce **environmental impact**

---

## 📊 Dataset Overview

Dataset includes **daily waste generation** from multiple Bangkok districts.

**Details:**
- **Rows:** 182,651  
- **Columns:** 58  
- Includes daily average waste, variance, adjusted waste, district info, etc.

**Sources:**
- Rocket Media Lab — Bangkok Waste Database  
- Kaggle — Garbage Classification Dataset  

---

## 🛠️ Data Preparation

### ✔ Cleaning  
- Original yearly/district-based tables transformed into **daily-level tabular format**.  
- Standardized units to **tons/day**.

### ✔ Transformation  
- Added **holiday / festival indicators**  
- Converted tables for **Time Series Analysis**

### ✔ One-Hot Encoding  
- District column converted into binary indicators for ML models.

---

## 🔍 Analytics Types

### **1. Descriptive Analytics — What happened?**  
- Daily & district-level waste summaries  
- Example: Klong San (2012) → **125 tons/day average**

### **2. Diagnostic Analytics — Why did it happen?**  
- Investigated differences between weekdays, holidays, and between districts.

### **3. Predictive Analytics — What will happen?**  
- Forecasts next **6–12 months** using daily waste + holiday data  
- Models used:
  - Time Series  
  - Linear Regression  
  - Random Forest  
  - Gradient Boosting  
  - XGBoost

### **4. Prescriptive Analytics — What should we do?**  
- Suggested actions (e.g., increase collection fleets during holiday peaks)

---

## 🤖 Machine Learning Models & Performance

| Model              | RMSE     | R²      |
|--------------------|----------|---------|
| Linear Regression  | 64.4013  | 0.0907  |
| Random Forest      | 43.4670  | 0.5858  |
| Gradient Boosting  | 37.1200  | 0.6979  |

**Best Model:** Gradient Boosting  
**Additional Model:** XGBoost applied to Ratchathewi district.

---

## 📌 Visual Analytics Layers

- **L1:** Overview dashboards  

---

## 👥 Team Members

1. 65061447 — Smith Dipratna
2. 65039678 — Nakharat Photirat  
3. 65042386 — Theepop Phetpiam  
4. 65057974 — Oratchaporn Nakamon  

---

## 📄 License

This project is for **educational and academic purposes**.  
Feel free to fork and build upon it.

---

## 🙏 Acknowledgements

Thank you for supporting the CLEAR STREET project — designed to help make Bangkok cleaner through data-driven waste management.

