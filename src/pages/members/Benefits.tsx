import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Member Benefits</h1>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Knowledge & Resources</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Research publications, webinars, digital library access</p></CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Networking</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Conferences, events, online community forums</p></CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Career Support</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Job board, counseling, resume review services</p></CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle>Development</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">CPD tracking, leadership programs, mentorship</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Benefits;
