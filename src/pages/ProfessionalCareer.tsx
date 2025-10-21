import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ProfessionalCareer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Professional Career</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Unlock unlimited career opportunities with IAMA CMA-UK qualification
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Career Paths</h2>
            <p className="text-lg text-muted-foreground">
              IAMA members work in diverse roles across industries worldwide. Our qualification opens doors to prestigious positions in finance, accounting, consulting, and strategic management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Financial Controller",
                description: "Oversee financial operations and reporting for organizations",
                industries: ["Manufacturing", "Retail", "Technology"]
              },
              {
                title: "Management Accountant",
                description: "Provide strategic financial insights for business decisions",
                industries: ["Corporate", "Consulting", "Finance"]
              },
              {
                title: "Chief Financial Officer",
                description: "Lead financial strategy at executive level",
                industries: ["All Industries", "Startups", "MNCs"]
              },
              {
                title: "Financial Analyst",
                description: "Analyze financial data and market trends",
                industries: ["Banking", "Investment", "Insurance"]
              },
              {
                title: "Business Consultant",
                description: "Advise organizations on financial and strategic matters",
                industries: ["Consulting Firms", "Advisory", "Audit"]
              },
              {
                title: "Cost Accountant",
                description: "Manage and optimize organizational costs",
                industries: ["Manufacturing", "Production", "Logistics"]
              }
            ].map((role, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Industries:</p>
                    <div className="flex flex-wrap gap-1">
                      {role.industries.map((industry, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Career Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Salary Advancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  IAMA members report average salary increases of 30-40% within two years of qualification.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Entry Level: £30,000 - £45,000</li>
                  <li>• Mid-Career: £50,000 - £80,000</li>
                  <li>• Senior Level: £90,000 - £150,000+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Globe className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Global Mobility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Work anywhere in the world with internationally recognized credentials.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Recognition in 120+ countries</li>
                  <li>• Partnerships with global bodies</li>
                  <li>• International career opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Professional Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with 50,000+ professionals worldwide for collaboration and growth.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exclusive networking events</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Industry connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Briefcase className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Access exclusive resources to accelerate your career progression.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dedicated job board</li>
                  <li>• Career counseling services</li>
                  <li>• Resume and interview support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Start Your Career Journey</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful IAMA members and take your career to new heights.
          </p>
          <Link to="/apply">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalCareer;
