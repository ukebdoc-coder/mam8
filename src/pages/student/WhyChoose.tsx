import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Globe, TrendingUp, Users, Zap } from "lucide-react";

const WhyChoose = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose IAMA?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover the advantages of studying with IAMA
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "World-Class Education",
                description: "Internationally recognized curriculum developed by industry experts and aligned with global standards."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Network",
                description: "Connect with 50,000+ professionals across 120+ countries for collaboration and career opportunities."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Success",
                description: "95% of our graduates secure senior finance positions within 2 years of qualification."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with online, classroom, or blended learning options."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Recognition",
                description: "Qualification recognized by employers, universities, and professional bodies worldwide."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Comprehensive Support",
                description: "Access dedicated student support, study resources, and career guidance throughout your journey."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChoose;
