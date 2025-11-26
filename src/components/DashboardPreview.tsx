import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export const DashboardPreview = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("1");
  const [selectedDay, setSelectedDay] = useState<string>("1");
  const [predictionData, setPredictionData] = useState<any[]>([]);
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [totalWaste, setTotalWaste] = useState<number>(0);
  const [dailyAvg, setDailyAvg] = useState<number>(0);

  const districts = [
    "Bang Bon",
    "Bang Khae",
    "Bang Kapi",
    "Bang Kho Laem",
    "Bang Khen",
    "Bang Khun Thian",
    "Bang Na",
    "Bang Phlat",
    "Bang Rak",
    "Bang Sue",
    "Bangkok Noi",
    "Bangkok Yai",
    "Bueng Kum",
    "Chatuchak",
    "Chom Thong",
    "Din Daeng",
    "Don Mueang",
    "Dusit",
    "Huai Khwang",
    "Khan Na Yao",
    "Khlong Sam Wa",
    "Khlong San",
    "Khlong Toei",
    "Lak Si",
    "Lat Krabang",
    "Lat Phrao",
    "Min Buri",
    "Nong Chok",
    "Nong Khaem",
    "Pathum Wan",
    "Phasi Charoen",
    "Phaya Thai",
    "Phra Khanong",
    "Phra Nakhon",
    "Pom Prap Sattru Phai",
    "Prawet",
    "Rat Burana",
    "Ratchathewi",
    "Sai Mai",
    "Samphanthawong",
    "Saphan Sung",
    "Sathon",
    "Suan Luang",
    "Taling Chan",
    "Thawi Watthana",
    "Thon Buri",
    "Thung Khru",
    "Wang Thonglang",
    "Watthana",
    "Yan Nawa"
  ].sort();

  // Years 2020 to 2029 in ascending order
  const years = Array.from({ length: 10 }, (_, i) => (2020 + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));

  const fetchPrediction = async () => {
    if (!selectedDistrict || !selectedYear) return;
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          district: selectedDistrict,
          year: parseInt(selectedYear),
          month: parseInt(selectedMonth),
          day: parseInt(selectedDay)
        })
      });
      const data = await res.json();
      setPredictionData(data.prediction_7day);
      setHistoricalData(data.historical_7day);
      setTotalWaste(data.total_waste_ton);
      setDailyAvg(data.daily_avg_ton);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPrediction();
  }, [selectedDistrict, selectedYear, selectedMonth, selectedDay]);

  const metrics = [
    { label: "Total Waste (Ton)", value: totalWaste.toFixed(2), icon: BarChart3, color: "text-primary" },
    { label: "Districts", value: districts.length.toString(), icon: MapPin, color: "text-secondary" },
    { label: "Daily Average (Ton)", value: dailyAvg.toFixed(2), icon: TrendingUp, color: "text-success" },
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

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
                <p className="text-2xl font-bold">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select District & Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">District</label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger><SelectValue placeholder="Select District" /></SelectTrigger>
                  <SelectContent>
                    {districts.map(d => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
                  <SelectContent>
                    {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Month</label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
                  <SelectContent>
                    {months.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Day</label>
                <Select value={selectedDay} onValueChange={setSelectedDay}>
                  <SelectTrigger><SelectValue placeholder="Day" /></SelectTrigger>
                  <SelectContent>
                    {days.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prediction Card */}
        {selectedDistrict && selectedYear && predictionData.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>7-Day Waste Prediction for {selectedDistrict}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Starting from {selectedDay}/{selectedMonth}/{selectedYear}</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={predictionData.map((p, i) => ({
                  day: `Day ${i + 1}`,
                  predicted: p.predicted,
                  historical: historicalData[i]?.predicted ?? 0
                }))}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" name="Predicted Waste (Ton)" />
                  <Line type="monotone" dataKey="historical" stroke="hsl(var(--secondary))" name="Historical Last Year (Ton)" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};
