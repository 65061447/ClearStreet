import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DatasetSection } from "@/components/DatasetSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { DashboardPreview } from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <BenefitsSection />
      <DatasetSection />
      <AnalyticsSection />
      <DashboardPreview />
      <div id="dashboard"></div>
      
      <footer className="bg-gradient-eco text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2024 Clear Street - Smart City Waste Prediction System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
