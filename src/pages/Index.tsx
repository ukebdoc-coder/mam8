import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Globe, Users, BookOpen, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Your Professional Journey with <span className="text-accent">IAMA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The International Association of Management Accountants - Your gateway to global recognition and professional excellence in management accounting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-primary">
                  Apply Online
                </Button>
              </Link>
              <Link to="/student">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Explore Qualifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Qualification */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Qualification</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The IAMA CMA-UK qualification is recognized worldwide as a mark of excellence in management accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Certificate Level</CardTitle>
                <CardDescription>Foundation in management accounting principles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Build essential knowledge in financial accounting, management accounting fundamentals, and business economics.
                </p>
                <Link to="/student/certificate-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Managerial Level</CardTitle>
                <CardDescription>Develop strategic business competencies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Master performance management, financial management, and advanced management accounting techniques.
                </p>
                <Link to="/student/managerial-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group bg-card border-border hover:border-primary overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Advanced Level</CardTitle>
                <CardDescription>Achieve executive-level expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Excel in strategic management accounting, corporate reporting, and business strategy for senior leadership roles.
                </p>
                <Link to="/student/advanced-level">
                  <Button className="w-full group-hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Professional Career */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Professional Career Starts Here
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                IAMA members work in diverse industries across finance, manufacturing, consulting, technology, and public sector organizations worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  "Global recognition and mobility",
                  "Career advancement opportunities",
                  "Professional networking and mentorship",
                  "Continuous professional development"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">15+</CardTitle>
                  <CardDescription>Years of Excellence</CardDescription>
                </CardHeader>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">50K+</CardTitle>
                  <CardDescription>Global Members</CardDescription>
                </CardHeader>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">120+</CardTitle>
                  <CardDescription>Countries</CardDescription>
                </CardHeader>
              </Card>
              <Card className="group bg-card border-border text-center hover:border-primary animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300 inline-block">95%</CardTitle>
                  <CardDescription>Pass Rate</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why IAMA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose IAMA?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide world-class education, global recognition, and unparalleled support for your professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Recognition",
                description: "IAMA qualifications are recognized by employers and regulatory bodies worldwide."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "Learn from industry leaders and experienced practitioners in management accounting."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Growth",
                description: "Access exclusive job opportunities and career advancement resources."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Standards",
                description: "Curriculum aligned with international accounting and business standards."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with online, classroom, and blended options."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Vibrant Community",
                description: "Join a global network of professionals for collaboration and growth."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              International Recognition
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              IAMA is recognized by leading professional bodies, universities, and organizations globally. Our qualifications open doors to careers in accounting, finance, consulting, and senior management positions worldwide.
            </p>
            <Link to="/student">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                View Recognition Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with IAMA. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-primary">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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

export default Index;
