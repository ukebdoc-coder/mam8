import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Exemptions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Exemptions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Recognition of prior learning and professional qualifications
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border mb-6">
              <CardHeader>
                <CardTitle>Exemption Policy</CardTitle>
                <CardDescription>IAMA recognizes prior academic achievements and professional qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  IAMA recognizes prior academic achievements and professional qualifications. Exemptions may be granted based on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Academic Exemptions</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Bachelor's degree in Accounting/Finance</li>
                      <li>• Master's degree in related fields</li>
                      <li>• Recognized university qualifications</li>
                      <li>• Specific subject exemptions</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Professional Exemptions</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ACCA members/students</li>
                      <li>• CIMA qualified accountants</li>
                      <li>• CPA and other recognized bodies</li>
                      <li>• Partial qualifications considered</li>
                    </ul>
                  </div>
                </div>
                <Link to="/apply">
                  <Button className="bg-primary hover:bg-accent mt-4">Apply for Exemptions</Button>
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

export default Exemptions;
