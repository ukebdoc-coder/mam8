import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const AdvancedLevel = () => {
  const coreSubjects = [
    "Adv. Corporate Reporting",
    "Advance Financial Management",
    "Advance Management Accounting",
    "Strategy & Leadership"
  ];

  const electiveSubjects = [
    "Audit & Assurance-Int",
    "Taxation-UK"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Advanced Level</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Advanced Diploma in Business Management - Strategic Stage
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="bg-card border-border mb-6">
                <CardHeader>
                  <CardTitle className="text-3xl">Course Overview</CardTitle>
                  <CardDescription>Certified Management Accountants UK (CMA-UK)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The Advanced Level is the strategic stage of the CMA-UK qualification, designed for senior professionals seeking expertise in strategic financial management, corporate reporting, and business leadership.
                  </p>
                  <p className="text-muted-foreground">
                    This level develops strategic thinking, advanced technical skills, and leadership capabilities required for C-suite and senior management positions in finance and business.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border mb-6 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="text-2xl">Core Subjects</CardTitle>
                  <CardDescription>4 essential strategic subjects</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {coreSubjects.map((subject, index) => (
                      <div key={index} className="group flex items-start gap-3 p-4 rounded-lg bg-accent/50 border border-border hover:border-primary hover:bg-accent/70 transition-all duration-300 animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                        <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{subject}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20">
                  <CardTitle className="text-2xl">Elective Subjects</CardTitle>
                  <CardDescription>Choose one specialization</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {electiveSubjects.map((subject, index) => (
                      <div key={index} className="group flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary hover:border-primary hover:bg-primary/20 transition-all duration-300 animate-fade-in cursor-pointer" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                        <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{subject}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card border-border sticky top-24">
                <CardHeader>
                  <CardTitle>Pricing & Fees</CardTitle>
                  <CardDescription>Advanced Level Investment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">registration fee

</p>
                    <p className="text-2xl font-bold text-foreground">£ 75</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Examination/ Exemption fee</p>
                    <p className="text-2xl font-bold text-foreground"> £ 55</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Annual sub </p>
                    <p className="text-2xl font-bold text-foreground">£75</p>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvancedLevel;
