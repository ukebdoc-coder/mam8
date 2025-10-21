import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Globe, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const WhyIAMA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why IAMA?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover what makes IAMA the preferred choice for management accounting professionals worldwide
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Recognition",
                description: "IAMA qualifications are recognized by employers, regulatory bodies, and professional organizations in over 120 countries worldwide.",
                benefits: [
                  "International career mobility",
                  "Partnerships with global bodies",
                  "Worldwide acceptance"
                ]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "Learn from industry leaders, experienced practitioners, and academic experts who bring real-world insights to your education.",
                benefits: [
                  "Industry professionals",
                  "Academic excellence",
                  "Practical experience"
                ]
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Comprehensive Curriculum",
                description: "Our syllabus is aligned with international standards and regularly updated to reflect current business practices and technologies.",
                benefits: [
                  "Up-to-date content",
                  "Industry-relevant skills",
                  "Practical applications"
                ]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Advancement",
                description: "95% of our graduates secure promotions or new positions within 2 years of qualification, with average salary increases of 30-40%.",
                benefits: [
                  "Higher earning potential",
                  "Leadership opportunities",
                  "Career progression"
                ]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Credibility & Trust",
                description: "Established for over 15 years, IAMA maintains the highest standards of professional education and ethical practice.",
                benefits: [
                  "Trusted brand",
                  "Quality assurance",
                  "Professional standards"
                ]
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with multiple learning options including online, classroom, and blended formats to suit your lifestyle.",
                benefits: [
                  "Self-paced learning",
                  "Multiple study modes",
                  "Work-life balance"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">15+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">50K+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Global Members</p>
                </CardContent>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">120+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </CardContent>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Student Support</h2>
            <div className="space-y-6">
              <Card className="group bg-card border-border hover:border-primary animate-fade-in">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Dedicated Support Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our student support team is available to assist you throughout your journey - from registration to qualification and beyond. Get help with technical questions, exam preparation, and career guidance.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">Contact Support</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="group bg-card border-border hover:border-primary animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Study Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access comprehensive study materials, practice questions, webinars, and online forums. Our digital library is constantly updated with the latest resources to support your learning.
                  </p>
                  <Link to="/student/study-options">
                    <Button variant="outline" className="w-full">View Resources</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="group bg-card border-border hover:border-primary animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Community & Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join a vibrant community of students and professionals. Participate in study groups, networking events, and mentorship programs to enhance your learning experience and build lasting connections.
                  </p>
                  <Link to="/find-member">
                    <Button variant="outline" className="w-full">Find Members</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Join IAMA Today</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the IAMA difference and transform your professional career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyIAMA;
