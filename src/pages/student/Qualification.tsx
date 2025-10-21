import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Qualification = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">IAMA Qualification Structure</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Three-tier pathway to professional excellence
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Certificate Level</CardTitle>
                <CardDescription>Foundation Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Financial Accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Cost Accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Managing People & System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Corporate & Business Law</span>
                  </li>
                </ul>
                <Link to="/student/certificate-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group bg-card border-primary border-2 hover:border-accent overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Managerial Level</CardTitle>
                <CardDescription>Professional Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Financial Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Performance Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Corporate Governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Management Accounting</span>
                  </li>
                </ul>
                <Link to="/student/managerial-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Advanced Level</CardTitle>
                <CardDescription>Strategic Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Adv. Financial Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Advance Financial Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Strategic Business Management & Leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Adv. Management Accounting</span>
                  </li>
                </ul>
                <Link to="/student/advanced-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Qualification;
