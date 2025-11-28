import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DashboardPreview = () => {
  // Looker Studio Embed URL ของคุณ
  const lookerURL = "https://lookerstudio.google.com/embed/reporting/1c366102-9633-4c2a-a99f-1a2e8109da82/page/woeeF";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            DASHBOARD
          </h2>
          <p className="text-lg text-muted-foreground">
            ภาพรวมข้อมูลและการวิเคราะห์จาก Looker Studio
          </p>
        </div>

        {/* Embed Looker Studio Dashboard */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Looker Studio Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[700px]">
              <iframe
                src={lookerURL}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Looker Studio Dashboard"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;
