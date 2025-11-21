import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export const DashboardPreview = () => {
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
    "เขตสาทร"
  ];

  const years = ["2024", "2023", "2022", "2021", "2020"];

  const topDistricts = [
    { name: "เขตบางกอกน้อย", value: "1,371,330", rank: 1 },
    { name: "เขตพระนคร", value: "1,177,848", rank: 2 },
    { name: "เขตบางกอกใหญ่", value: "1,120,213", rank: 3 },
    { name: "เขตคลองสาน", value: "1,100,763", rank: 4 },
    { name: "เขตธนบุรี", value: "1,016,723", rank: 5 }
  ];

  // Generate 7-day prediction data
  const generatePredictionData = () => {
    const baseValue = Math.floor(Math.random() * 50000) + 150000;
    return Array.from({ length: 7 }, (_, i) => ({
      day: `Day ${i + 1}`,
      predicted: Math.floor(baseValue + Math.random() * 20000 - 10000),
      historical: Math.floor(baseValue + Math.random() * 15000 - 7500)
    }));
  };

  const predictionData = generatePredictionData();

  const metrics = [
    { label: "Total Waste", value: "34.5M", icon: BarChart3, color: "text-primary" },
    { label: "Districts", value: "50", icon: MapPin, color: "text-secondary" },
    { label: "Daily Average", value: "196.4K", icon: TrendingUp, color: "text-success" },
    { label: "Predictions", value: "Active", icon: PieChart, color: "text-warning" }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            DASHBOARD
          </h2>
          <p className="text-lg text-muted-foreground">
            ภาพรวมข้อมูลและการวิเคราะห์
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-card-foreground">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top Districts */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top Districts by Waste Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topDistricts.map((district) => (
                  <div key={district.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {district.rank}
                      </div>
                      <span className="font-medium text-card-foreground">{district.name}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{district.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prediction Filters */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>7-Day Waste Prediction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select District</label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a district" />
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
                  <label className="text-sm font-medium text-foreground">Select Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a year" />
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

              {selectedDistrict && selectedYear ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground">
                      Showing predictions for <span className="font-bold text-primary">{selectedDistrict}</span> in <span className="font-bold text-primary">{selectedYear}</span>
                    </p>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={predictionData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="day" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="predicted" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        name="Predicted Waste (kg)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="historical" 
                        stroke="hsl(var(--secondary))" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Historical Average (kg)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a district and year to view predictions</p>
                    <p className="text-sm text-muted-foreground">7-day waste volume forecast</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
