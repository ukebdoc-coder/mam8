import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Globe, TrendingUp, Network, BookOpen, Shield } from "lucide-react";

const WhyBecome = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Become an IAMA Member?</h1>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Global Recognition", description: "IAMA designation respected worldwide" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Career Advancement", description: "30-40% salary increase average" },
              { icon: <Network className="w-8 h-8" />, title: "Professional Network", description: "50,000+ members globally" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Continuous Learning", description: "Exclusive resources and CPD" },
              { icon: <Shield className="w-8 h-8" />, title: "Professional Status", description: "ACMA, FCMA designations" },
              { icon: <Award className="w-8 h-8" />, title: "Mentorship Programs", description: "Expert guidance and support" }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default WhyBecome;
