import { CheckCircle2 } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    "การวางแผนการจัดเก็บขยะอย่างเหมาะสม",
    "การปรับตัวต่อวันหยุดและเทศกาล",
    "การบริหารทรัพยากรอย่างมีประสิทธิภาพ",
    "การสนับสนุนการตัดสินใจเชิงนโยบาย",
    "การลดผลกระทบต่อสิ่งแวดล้อม"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              BENEFITS AND GOALS
            </h2>
            <p className="text-lg text-muted-foreground">
              ประโยชน์และเป้าหมายของระบบ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
