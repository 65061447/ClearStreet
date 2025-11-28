import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Analytics = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Districts sorted alphabetically
  const districts = [
    "Bang Bon", "Bang Kapi", "Bang Kho Laem", "Bang Khen", "Bang Khun Thian",
    "Bang Na", "Bang Phlat", "Bang Rak", "Bang Sue", "Bangkok Noi",
    "Bangkok Yai", "Bueng Kum", "Chatuchak", "Chom Thong", "Din Daeng",
    "Don Mueang", "Dusit", "Huai Khwang", "Khlong Sam Wa", "Khlong San",
    "Khlong Toei", "Lat Krabang", "Lat Phrao", "Ladprao", "Min Buri",
    "Nong Chok", "Pathum Wan", "Phasi Charoen", "Phaya Thai", "Phra Khanong",
    "Phra Nakhon", "Pom Prap Sattru Phai", "Prawet", "Rat Burana", "Ratchathewi",
    "Sai Mai", "Samphanthawong", "Saphan Sung", "Sathon", "Suan Luang",
    "Taling Chan", "Thawi Watthana", "Thon Buri", "Thung Khru", "Wang Thonglang",
    "Watthana", "Yan Nawa", "Bang Khun Phrom", "Bang Chan", "Khan Na Yao"
  ].sort();

  // Years from 2020 to 2029
  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);

  // Fetch prediction when button is clicked
  const fetchPrediction = async () => {
    if (!selectedDistrict || !selectedYear) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/predict_yearly", {
        district: selectedDistrict,
        year: Number(selectedYear),
      });
      setPrediction(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching prediction. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-eco text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Yearly Waste Prediction</h1>
          <p className="text-white/90 mt-2">การทำนายปริมาณขยะรายปี - Yearly Waste Prediction</p>
        </div>
      </header>

      {/* Selection Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Select District and Year
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* District */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      District
                    </label>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Year
                    </label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map(y => <SelectItem key={y} value={y.toString()}>{y}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Predict Button */}
                <Button
                  onClick={fetchPrediction}
                  disabled={!selectedDistrict || !selectedYear || loading}
                  className="mt-4 w-auto md:w-40 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? "Predicting..." : "Predict"}
                </Button>
              </CardContent>
            </Card>

            {/* Prediction Card */}
            {prediction ? (
              <Card className="shadow-card border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="text-center">
                    Prediction Results for {selectedDistrict} ({selectedYear})
                  </CardTitle>
                  <p className="text-center text-sm text-muted-foreground">
                    ภาพรวมผลการทำนายปริมาณขยะรายปี
                  </p>
                </CardHeader>
                <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Daily Average</p>
                    <p className="text-2xl font-bold text-primary">
                      {(prediction.daily_avg_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">ค่าเฉลี่ยต่อวัน</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Total</p>
                    <p className="text-2xl font-bold text-secondary">
                      {(prediction.monthly_total_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">รวมต่อเดือน</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm text-muted-foreground mb-1">Weekday Average</p>
                    <p className="text-2xl font-bold text-foreground">
                      {(prediction.weekday_avg_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">เฉลี่ยวันธรรมดา</p>
                  </div>
                  <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                    <p className="text-sm text-muted-foreground mb-1">Weekend Average</p>
                    <p className="text-2xl font-bold text-foreground">
                      {(prediction.weekend_avg_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">เฉลี่ยวันหยุด</p>
                  </div>
                  <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                    <p className="text-sm text-muted-foreground mb-1">Peak Day</p>
                    <p className="text-2xl font-bold text-success">
                      {(prediction.peak_day_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">วันที่มากที่สุด</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Lowest Day</p>
                    <p className="text-2xl font-bold text-foreground">
                      {(prediction.lowest_day_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">วันที่น้อยที่สุด</p>
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 col-span-full">
                    <p className="text-sm text-muted-foreground mb-2">Yearly Projection</p>
                    <p className="text-3xl font-bold text-primary">
                      {(prediction.yearly_projection_ton).toLocaleString()} ตัน
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      การคาดการณ์รายปี (Estimated annual waste volume)
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="py-12 text-center">
                  <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">
                    Select a district and year to view predictions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    เลือกเขตและปีเพื่อดูผลการทำนาย
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
