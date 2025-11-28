import { AlertTriangle, Trash2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Trash2,
      title: "ปริมาณขยะมหาศาล",
      description: "กรุงเทพฯ ผลิตขยะจำนวนมากในแต่ละวัน (ประมาณ 8,700-10,000 ตันต่อวัน) ซึ่งมีแนวโน้มเพิ่มสูงขึ้นอย่างต่อเนื่อง"
    },
    {
      icon: AlertTriangle,
      title: "การขาดประสิทธิภาพในการคัดแยกและกำจัด",
      description: "ระบบกำจัดขยะ เช่น การฝังกลบหรือเผาไม่สามารถรองรับปริมาณทั้งหมดได้ทันที ทำให้เกิดขยะล้น และส่งผลต่อสิ่งแวดล้อม"
    },
    {
      icon: Calendar,
      title: "การวางแผนการจัดเก็บขยะไม่เหมาะสม",
      description: "ปริมาณขยะมีความผันผวนสูง ทั้งในระดับเขตและตามวันหยุด ทำให้หน่วยงานไม่สามารถวางแผนได้อย่างเหมาะสม"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            PROBLEM
          </h2>
          <p className="text-lg text-muted-foreground">
            ปัญหาที่เกิดขึ้นในเขตต่างๆของกรุงเทพ
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-danger/10">
                  <problem.icon className="h-6 w-6 text-danger" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
