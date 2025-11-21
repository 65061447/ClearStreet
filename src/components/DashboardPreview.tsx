import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, MapPin } from "lucide-react";

export const DashboardPreview = () => {
  const topDistricts = [
    { name: "เขตบางกอกน้อย", value: "1,371,330", rank: 1 },
    { name: "เขตพระนคร", value: "1,177,848", rank: 2 },
    { name: "เขตบางกอกใหญ่", value: "1,120,213", rank: 3 },
    { name: "เขตคลองสาน", value: "1,100,763", rank: 4 },
    { name: "เขตธนบุรี", value: "1,016,723", rank: 5 }
  ];

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

          {/* Chart Placeholder */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Waste Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive chart visualization</p>
                  <p className="text-sm text-muted-foreground">Displaying waste trends over time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
