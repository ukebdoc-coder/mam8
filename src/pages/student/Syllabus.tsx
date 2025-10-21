import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Syllabus = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Syllabus</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete IAMA CMA-UK syllabus and study materials
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Download Syllabus</h2>
            <p className="text-muted-foreground mb-8">
              Access the complete IAMA CMA-UK syllabus with detailed learning outcomes, exam formats, and study materials.
            </p>
            <Button size="lg" className="bg-primary hover:bg-accent">
              Download Complete Syllabus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Syllabus;
