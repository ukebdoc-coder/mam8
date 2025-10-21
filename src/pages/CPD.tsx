import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, CheckCircle2, FileText, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CPD = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Continuous Professional Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Maintain your professional competence and stay ahead in your career through structured CPD
          </p>
        </div>
      </section>

      {/* What is CPD */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What is CPD?</h2>
              <p className="text-lg text-muted-foreground">
                Continuous Professional Development (CPD) is the means by which members maintain and enhance their professional competence throughout their careers. It ensures you stay current with industry developments, regulatory changes, and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Learn",
                  description: "Acquire new knowledge and skills relevant to your role"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Apply",
                  description: "Put your learning into practice in your professional work"
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Record",
                  description: "Document your development activities and outcomes"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CPD Requirements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">CPD Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border mb-8">
              <CardHeader>
                <CardTitle>Annual CPD Obligation</CardTitle>
                <CardDescription>All IAMA members must complete the following each year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 text-primary-foreground">
                      <span className="text-2xl font-bold">40</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Minimum 40 Hours CPD</h4>
                      <p className="text-muted-foreground">
                        Complete at least 40 hours of CPD activities annually, with at least 21 hours being verifiable CPD.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-secondary rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Verifiable CPD (Min. 21 hours)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Activities with documented evidence and outcomes
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Formal training courses</li>
                        <li>• Professional conferences</li>
                        <li>• Webinars with certificates</li>
                        <li>• Technical research projects</li>
                        <li>• Formal mentoring programs</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-secondary rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Non-Verifiable CPD (Up to 19 hours)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Self-directed learning and informal development
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reading professional journals</li>
                        <li>• Informal networking</li>
                        <li>• Self-study</li>
                        <li>• Internal training sessions</li>
                        <li>• Professional podcasts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of CPD Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Types of CPD Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Formal Education",
                items: [
                  "University courses and degrees",
                  "Professional qualifications",
                  "Technical certifications",
                  "Postgraduate studies"
                ]
              },
              {
                title: "Technical Learning",
                items: [
                  "Software training (SAP, Oracle, etc.)",
                  "Industry-specific courses",
                  "Regulatory compliance training",
                  "Technical workshops"
                ]
              },
              {
                title: "Professional Events",
                items: [
                  "IAMA conferences",
                  "Industry seminars",
                  "Networking events",
                  "Chapter meetings"
                ]
              },
              {
                title: "Knowledge Sharing",
                items: [
                  "Presenting at conferences",
                  "Publishing articles",
                  "Teaching and mentoring",
                  "Leading workshops"
                ]
              },
              {
                title: "Online Learning",
                items: [
                  "Webinars and e-learning",
                  "Virtual conferences",
                  "Online courses (MOOCs)",
                  "Professional podcasts"
                ]
              },
              {
                title: "Work-Based Learning",
                items: [
                  "Project management",
                  "Job rotation programs",
                  "Secondments",
                  "Special assignments"
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CPD Cycle */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">The CPD Cycle</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Plan",
                  description: "Identify learning needs and set development goals aligned with your career"
                },
                {
                  step: "2",
                  title: "Act",
                  description: "Undertake CPD activities through courses, events, or self-study"
                },
                {
                  step: "3",
                  title: "Record",
                  description: "Document your activities, hours, and key learnings in the CPD portal"
                },
                {
                  step: "4",
                  title: "Reflect",
                  description: "Evaluate outcomes and plan next steps for continuous improvement"
                }
              ].map((phase, index) => (
                <Card key={index} className="bg-card border-border text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-accent rotate-45"></div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                      <span className="text-xl font-bold">{phase.step}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IAMA CPD Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">IAMA CPD Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Events & Webinars</CardTitle>
                <CardDescription>Access our extensive calendar of professional development events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monthly technical webinars</li>
                  <li>• Annual international conference</li>
                  <li>• Regional chapter events</li>
                  <li>• Industry-specific workshops</li>
                  <li>• Leadership development programs</li>
                </ul>
                <Button className="mt-4 bg-primary hover:bg-accent w-full">View Events Calendar</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Online Learning Portal</CardTitle>
                <CardDescription>Self-paced courses and resources available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100+ e-learning modules</li>
                  <li>• Technical article library</li>
                  <li>• Industry reports and research</li>
                  <li>• Recorded webinars archive</li>
                  <li>• Interactive case studies</li>
                </ul>
                <Button className="mt-4 bg-primary hover:bg-accent w-full">Access Portal</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <FileText className="w-10 h-10 text-accent mb-4" />
                <CardTitle>CPD Tracking Tool</CardTitle>
                <CardDescription>Digital platform to log and manage your CPD activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Easy activity logging</li>
                  <li>• Automatic hour calculations</li>
                  <li>• Evidence upload capability</li>
                  <li>• Progress tracking dashboards</li>
                  <li>• Compliance reporting</li>
                </ul>
                <Button className="mt-4 bg-primary hover:bg-accent w-full">Start Tracking</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Calendar className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Personalized Planning</CardTitle>
                <CardDescription>Tools and guidance to plan your development journey</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Skills assessment tools</li>
                  <li>• Career path guidance</li>
                  <li>• Goal setting templates</li>
                  <li>• Development plan builders</li>
                  <li>• Mentor matching service</li>
                </ul>
                <Button className="mt-4 bg-primary hover:bg-accent w-full">Create Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>CPD Compliance & Monitoring</CardTitle>
                <CardDescription>Understanding your obligations and the verification process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Annual Declaration</h4>
                  <p className="text-muted-foreground">
                    All members must declare their CPD compliance annually as part of the membership renewal process. You will confirm that you have completed the required 40 hours and maintained records.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Random Audits</h4>
                  <p className="text-muted-foreground">
                    IAMA conducts random audits of member CPD records. If selected, you must provide evidence of your CPD activities within 30 days. Ensure you maintain supporting documentation for all verifiable CPD.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Non-Compliance</h4>
                  <p className="text-muted-foreground">
                    Failure to meet CPD requirements may result in membership suspension until compliance is achieved. In serious cases, it may affect your professional standing and use of IAMA designations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Start Your CPD Journey Today</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Access our comprehensive CPD resources and track your professional development with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Access CPD Portal
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">
                Contact CPD Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CPD;
