import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, Globe, Network, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import membersImage from "@/assets/members-hero.jpg";

const Members = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 md:py-24">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${membersImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">IAMA Membership</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join a global community of elite management accounting professionals
          </p>
        </div>
      </section>

      {/* Why Become a Member */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Become an IAMA Member?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IAMA membership offers unparalleled professional recognition, career advancement opportunities, and access to a global network of finance professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Recognition",
                description: "IAMA designation is respected by employers and regulatory bodies worldwide, opening doors to international career opportunities."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Advancement",
                description: "Members report average salary increases of 30-40% within two years of qualification and faster progression to senior roles."
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Professional Network",
                description: "Connect with 50,000+ members globally through events, conferences, and online communities."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Continuous Learning",
                description: "Access exclusive resources, webinars, research publications, and professional development programs."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Professional Status",
                description: "Use prestigious designations: ACMA, FCMA, demonstrating your commitment to excellence."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Mentorship Programs",
                description: "Benefit from experienced mentors and contribute to the next generation of management accountants."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Membership Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>Student Member</CardTitle>
                  <CardDescription>For those pursuing IAMA qualification</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Access to study resources</li>
                  <li>• Student networking events</li>
                  <li>• Career guidance services</li>
                  <li>• Discounted event tickets</li>
                </ul>
                <p className="text-center font-bold text-foreground">£100/year</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>Associate Member (ACMA)</CardTitle>
                  <CardDescription>Fully qualified professionals</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Full membership benefits</li>
                  <li>• Use of ACMA designation</li>
                  <li>• Voting rights</li>
                  <li>• All networking events</li>
                  <li>• CPD tracking tools</li>
                </ul>
                <p className="text-center font-bold text-foreground">£250/year</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>Fellow Member (FCMA)</CardTitle>
                  <CardDescription>Senior professionals & leaders</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• All ACMA benefits</li>
                  <li>• Use of FCMA designation</li>
                  <li>• Leadership opportunities</li>
                  <li>• Exclusive executive events</li>
                  <li>• Mentorship programs</li>
                </ul>
                <p className="text-center font-bold text-foreground">£350/year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Compliance Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border mb-6">
              <CardHeader>
                <CardTitle>Maintaining Your Professional Status</CardTitle>
                <CardDescription>Annual requirements for all IAMA members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-accent" />
                    Continuing Professional Development (CPD)
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    All members must complete a minimum of 40 hours of CPD annually:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• At least 21 hours of verifiable CPD activities</li>
                    <li>• Remaining hours can be non-verifiable CPD</li>
                    <li>• Must be relevant to your professional development</li>
                    <li>• Record and submit via member portal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-accent" />
                    Code of Ethics
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Members must adhere to IAMA's Code of Professional Ethics:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Integrity and objectivity in all professional activities</li>
                    <li>• Confidentiality of information</li>
                    <li>• Professional competence and due care</li>
                    <li>• Compliance with relevant laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-accent" />
                    Annual Membership Renewal
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Membership must be renewed annually:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Payment of annual subscription fee</li>
                    <li>• Confirmation of CPD completion</li>
                    <li>• Declaration of compliance with Code of Ethics</li>
                    <li>• Update of personal and employment details</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-accent" />
                  Knowledge & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access to research publications and technical articles</li>
                  <li>• Industry reports and market insights</li>
                  <li>• Member-only webinars and online courses</li>
                  <li>• Digital library and knowledge center</li>
                  <li>• Monthly newsletter and updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="w-6 h-6 mr-2 text-accent" />
                  Networking Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual international conference</li>
                  <li>• Regional networking events and seminars</li>
                  <li>• Online community forums and discussion groups</li>
                  <li>• Special interest groups by industry or specialty</li>
                  <li>• Access to global member directory</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-accent" />
                  Career Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Exclusive job board with premium positions</li>
                  <li>• Career counseling and coaching services</li>
                  <li>• Resume review and interview preparation</li>
                  <li>• Salary benchmarking tools and surveys</li>
                  <li>• Recruitment agency partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-accent" />
                  Professional Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CPD tracking and planning tools</li>
                  <li>• Leadership development programs</li>
                  <li>• Mentorship matching services</li>
                  <li>• Public speaking and communication workshops</li>
                  <li>• Professional certifications and specializations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition and Partnerships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Recognition</h2>
            <p className="text-lg text-muted-foreground mb-8">
              IAMA has reciprocal agreements and partnerships with leading accounting bodies worldwide, including ACCA, CIMA, CPA Australia, and many others. Our members enjoy recognition and mobility across borders.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground">120+</p>
                <p>Countries</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground">50,000+</p>
                <p>Members</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground">30+</p>
                <p>Partner Bodies</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground">15+</p>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Join IAMA?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the next step in your professional journey and become part of our global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Apply for Membership
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

export default Members;
