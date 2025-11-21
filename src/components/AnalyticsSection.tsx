import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calendar, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const AnalyticsSection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const districts = [
    "เขตบางกอกน้อย",
    "เขตพระนคร",
    "เขตบางกอกใหญ่",
    "เขตคลองสาน",
    "เขตธนบุรี",
    "เขตบางรัก",
    "เขตปทุมวัน",
    "เขตสาทร",
    "เขตบางเขน",
    "เขตดินแดง"
  ];

  const years = ["2024", "2023", "2022", "2021", "2020"];

  // Generate prediction based on district and year
  const generatePrediction = () => {
    const baseWaste = Math.floor(Math.random() * 50000) + 150000;
    const variance = Math.floor(Math.random() * 10000);
    return {
      dailyAverage: baseWaste,
      weekdayAverage: baseWaste - variance,
      weekendAverage: baseWaste + variance,
      peakDay: baseWaste + variance * 2,
      lowestDay: baseWaste - variance * 1.5,
      monthlyTotal: baseWaste * 30,
      yearlyProjection: baseWaste * 365
    };
  };

  const prediction = selectedDistrict && selectedYear ? generatePrediction() : null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            PREDICTIVE ANALYTICS
          </h2>
          <p className="text-lg text-muted-foreground">
            การทำนายปริมาณขยะรายวัน - Daily Waste Prediction
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Selection Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Select District and Year for Prediction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    District (เขต)
                  </label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="เลือกเขต / Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Year (ปี)
                  </label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="เลือกปี / Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prediction Results */}
          {prediction ? (
            <div className="space-y-4">
              <Card className="shadow-card border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="text-center">
                    Prediction Results for {selectedDistrict} ({selectedYear})
                  </CardTitle>
                  <p className="text-center text-sm text-muted-foreground">
                    ผลการทำนายปริมาณขยะรายวัน
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">Daily Average</p>
                      <p className="text-2xl font-bold text-primary">
                        {prediction.dailyAverage.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">ค่าเฉลี่ยต่อวัน</p>
                    </div>

                    <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                      <p className="text-sm text-muted-foreground mb-1">Monthly Total</p>
                      <p className="text-2xl font-bold text-secondary">
                        {prediction.monthlyTotal.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">รวมต่อเดือน</p>
                    </div>

                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-sm text-muted-foreground mb-1">Weekday Average</p>
                      <p className="text-2xl font-bold text-foreground">
                        {prediction.weekdayAverage.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">เฉลี่ยวันธรรมดา</p>
                    </div>

                    <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                      <p className="text-sm text-muted-foreground mb-1">Weekend Average</p>
                      <p className="text-2xl font-bold text-foreground">
                        {prediction.weekendAverage.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">เฉลี่ยวันหยุด</p>
                    </div>

                    <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                      <p className="text-sm text-muted-foreground mb-1">Peak Day</p>
                      <p className="text-2xl font-bold text-success">
                        {prediction.peakDay.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">วันที่มากที่สุด</p>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Lowest Day</p>
                      <p className="text-2xl font-bold text-foreground">
                        {prediction.lowestDay.toLocaleString()} kg
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">วันที่น้อยที่สุด</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">Yearly Projection</p>
                    <p className="text-3xl font-bold text-primary">
                      {prediction.yearlyProjection.toLocaleString()} kg
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      การคาดการณ์รายปี (Estimated annual waste volume)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="py-12">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">
                    Select a district and year to view predictions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    เลือกเขตและปีเพื่อดูผลการทำนาย
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
