import { BarChart3, TrendingUp, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-eco py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
            <Recycle className="h-4 w-4" />
            Smart City Solution
          </div>
          
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            CLEAR STREET
          </h1>
          
          <p className="mb-4 text-xl font-medium text-white/90 md:text-2xl">
            ระบบพยากรณ์ขยะ
          </p>
          
          <p className="mb-8 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
            Advanced waste prediction system for Bangkok using AI-powered analytics to optimize waste management and create a cleaner, smarter city
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-elevated" asChild>
              <a href="#dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/analytics">
                <TrendingUp className="mr-2 h-5 w-5" />
                Analytics
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
