import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Compliance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Compliance Requirements</h1>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>CPD Requirements</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Complete minimum 40 hours annually (21 hours verifiable)</p></CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Code of Ethics</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Adhere to professional ethics and integrity standards</p></CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Annual Renewal</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Pay subscription and confirm compliance annually</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Compliance;
