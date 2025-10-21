import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar } from "lucide-react";

const Fees = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fee & Key Dates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transparent pricing and important deadlines
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <DollarSign className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Registration Fee</span>
                    <span className="font-semibold text-foreground">£150</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Certificate Level (per paper)</span>
                    <span className="font-semibold text-foreground">£120</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Managerial Level (per paper)</span>
                    <span className="font-semibold text-foreground">£150</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Advanced Level (per paper)</span>
                    <span className="font-semibold text-foreground">£180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual Subscription</span>
                    <span className="font-semibold text-foreground">£100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Calendar className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Key Dates 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">March Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Jan 15 | Exams: Mar 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">June Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Apr 15 | Exams: Jun 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">September Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Jul 15 | Exams: Sep 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">December Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Oct 15 | Exams: Dec 10-20</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fees;
