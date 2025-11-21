import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Table2 } from "lucide-react";

export const DatasetSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DATASET
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ชุดข้อมูลนี้มีข้อมูลอย่างละเอียดเกี่ยวกับปริมาณขยะมูลฝอยรายวันของหลายเขตในกรุงเทพมหานคร
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <Database className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="text-4xl font-bold text-card-foreground mb-2">58</p>
                <p className="text-muted-foreground">Columns</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <Table2 className="h-12 w-12 text-secondary mx-auto mb-3" />
                <p className="text-4xl font-bold text-card-foreground mb-2">182,651</p>
                <p className="text-muted-foreground">Rows</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-success mx-auto mb-3" />
                <p className="text-4xl font-bold text-card-foreground mb-2">50+</p>
                <p className="text-muted-foreground">Districts</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Key Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-muted-foreground">ความหนาแน่นของประชากร (Population Density)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-muted-foreground">ประชากร (Population)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-muted-foreground">ขนาดของพื้นที่ (area_dimension)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-muted-foreground">ปริมาณขยะที่ปรับแล้ว (Adjusted Daily Waste) - หน่วยเป็นตัน</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
