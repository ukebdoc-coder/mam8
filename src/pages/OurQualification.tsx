import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const OurQualification = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Qualification</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The IAMA CMA-UK qualification - Your pathway to professional excellence
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">The CMA-UK Qualification</h2>
            <p className="text-lg text-muted-foreground mb-4">
              The Certified Management Accountant (CMA-UK) qualification is internationally recognized and designed to equip professionals with the skills and knowledge needed to excel in management accounting, financial management, and strategic business leadership.
            </p>
            <p className="text-muted-foreground">
              Our three-tier qualification structure ensures comprehensive development from foundational concepts to advanced strategic competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Certificate Level</CardTitle>
                <CardDescription>Foundation Stage - Building Essential Knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="font-semibold text-foreground">Core Subjects:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Financial Accounting</li>
                  <li>• Management Accounting</li>
                  <li>• Business Economics</li>
                  <li>• Business Mathematics & Statistics</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-foreground mb-4">Duration: 6-12 months</p>
                  <Link to="/student/certificate-level">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-card border-primary border-2 hover:border-accent overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Managerial Level</CardTitle>
                <CardDescription>Professional Stage - Developing Expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="font-semibold text-foreground">Core Subjects:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Performance Management</li>
                  <li>• Financial Management</li>
                  <li>• Advanced Management Accounting</li>
                  <li>• Corporate Law & Governance</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-foreground mb-4">Duration: 12-18 months</p>
                  <Link to="/student/managerial-level">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Advanced Level</CardTitle>
                <CardDescription>Strategic Stage - Mastering Leadership</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="font-semibold text-foreground">Core Subjects:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strategic Management Accounting</li>
                  <li>• Corporate Reporting</li>
                  <li>• Business Strategy</li>
                  <li>• Research & Analysis Project</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-foreground mb-4">Duration: 12-18 months</p>
                  <Link to="/student/advanced-level">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Globally Recognized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Accepted by employers and professional bodies in over 120 countries worldwide.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Curriculum designed with input from industry leaders to ensure real-world relevance.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Flexible Study Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Choose from self-study, classroom, or blended learning to suit your schedule.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Career Advancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Open doors to senior roles in finance, accounting, and strategic management.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Begin?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your journey towards becoming a Certified Management Accountant today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Apply Now
              </Button>
            </Link>
            <Link to="/student/study-routes">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">
                Explore Study Routes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurQualification;
