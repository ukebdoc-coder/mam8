import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const StudyOptions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Study Options</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Choose the learning method that works best for you
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Self-Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Study at your own pace with comprehensive study materials and online resources.</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Study guides & textbooks</li>
                  <li>• Online learning portal</li>
                  <li>• Practice question banks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Classroom Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Attend face-to-face classes with expert tutors at approved learning centers.</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Interactive sessions</li>
                  <li>• Expert tutors</li>
                  <li>• Peer networking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <GraduationCap className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Blended Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Combine online flexibility with classroom interaction for optimal learning.</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Online lectures</li>
                  <li>• Weekend workshops</li>
                  <li>• Virtual tutorials</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyOptions;
