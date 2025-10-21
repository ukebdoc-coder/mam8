import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const StudyRoutes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Study Routes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Choose the pathway that best suits your background and goals
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="undergraduate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="undergraduate">Undergraduate/Graduate</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="mature">Mature Students</TabsTrigger>
            </TabsList>

            <TabsContent value="undergraduate" className="mt-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Undergraduate & Graduate Route</CardTitle>
                  <CardDescription>For recent graduates and undergraduate students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    This route is designed for students who have completed or are pursuing a bachelor's degree in accounting, finance, business, or related fields.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Complete all three levels: Certificate, Managerial, and Advanced</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Potential exemptions based on academic qualifications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Flexible study options: online, classroom, or blended</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Average completion time: 2-3 years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="professional" className="mt-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Professional Qualification Members/Students</CardTitle>
                  <CardDescription>For holders of other professional qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you hold qualifications from ACCA, CIMA, CPA, or other recognized professional bodies, you may be eligible for exemptions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Fast-track route with significant exemptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Recognition of prior professional learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Focus on advanced strategic competencies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Average completion time: 1-2 years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mature" className="mt-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Mature Students Route</CardTitle>
                  <CardDescription>For experienced professionals without formal qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Designed for professionals with significant work experience in accounting, finance, or related fields, even without traditional academic qualifications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Recognition of practical experience (5+ years minimum)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Customized study plan based on experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Flexible pacing to accommodate work commitments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Average completion time: 2-4 years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyRoutes;
