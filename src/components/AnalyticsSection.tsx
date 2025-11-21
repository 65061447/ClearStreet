import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Search, TrendingUp, Lightbulb } from "lucide-react";

export const AnalyticsSection = () => {
  const analyticsTypes = [
    {
      icon: Eye,
      title: "Descriptive Analytics",
      subtitle: "เกิดอะไรขึ้น?",
      description: "ปริมาณขยะเฉลี่ยรายวัน/รายเขต เช่น เขตคลองสาน ปี 2555 ขยะเฉลี่ยวันละ 125 ตัน",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Search,
      title: "Diagnostic Analytics",
      subtitle: "ทำไมถึงเกิดขึ้น?",
      description: "วิเคราะห์หาสาเหตุ เช่น ทำไมวันหยุดปริมาณขยะเพิ่มขึ้น เปรียบเทียบระหว่างวันหยุดและวันธรรมดา",
      color: "bg-warning/10 text-warning"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      subtitle: "จะเกิดอะไรขึ้น?",
      description: "ใช้ข้อมูล Adjusted Daily Waste และวันหยุด เพื่อสร้างโมเดลทำนายขยะในอนาคต คาดการณ์ปริมาณขยะในอีก 6 เดือน – 1 ปีข้างหน้า",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Lightbulb,
      title: "Prescriptive Analytics",
      subtitle: "ควรทำอย่างไร?",
      description: "แนะนำแนวทางการจัดการขยะตามข้อมูลที่พยากรณ์ เช่น ถ้าวันหยุดมีขยะเพิ่มขึ้นก็อาจจะเสนอเพิ่มเที่ยวรถเก็บขยะ",
      color: "bg-accent/10 text-accent-foreground"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ANALYTICS CAPABILITIES
          </h2>
          <p className="text-lg text-muted-foreground">
            ความสามารถในการวิเคราะห์ข้อมูล
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {analyticsTypes.map((type, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg ${type.color}`}>
                  <type.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                <p className="text-sm font-medium text-primary">{type.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
