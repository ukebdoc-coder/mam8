import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExamStructure = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Exam Structure</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Understand the format and schedule of IAMA examinations
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Exam Format</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Computer-based examinations</li>
                      <li>• Multiple choice and written questions</li>
                      <li>• Case study analysis (Advanced Level)</li>
                      <li>• Time: 3 hours per paper</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Exam Windows</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• March session</li>
                      <li>• June session</li>
                      <li>• September session</li>
                      <li>• December session</li>
                    </ul>
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

export default ExamStructure;
