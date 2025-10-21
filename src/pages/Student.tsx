import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle2, FileText, GraduationCap, Users, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import studentsImage from "@/assets/students-hero.jpg";

const Student = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 md:py-24">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${studentsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">IAMA Student</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your comprehensive guide to becoming a Certified Management Accountant
          </p>
        </div>
      </section>

      {/* Why Choose IAMA */}
      <section id="why-choose" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose IAMA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "World-Class Education",
                description: "Internationally recognized curriculum developed by industry experts"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Network",
                description: "Connect with 50,000+ professionals across 120+ countries"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Career Success",
                description: "95% of our graduates secure senior finance positions within 2 years"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
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
      </section>

      {/* Study Routes */}
      <section id="study-routes" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Study Routes</h2>
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

      {/* Exemptions */}
      <section id="exemptions" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exemptions</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border mb-6">
              <CardHeader>
                <CardTitle>Exemption Policy</CardTitle>
                <CardDescription>Recognition of prior learning and professional qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  IAMA recognizes prior academic achievements and professional qualifications. Exemptions may be granted based on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Academic Exemptions</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Bachelor's degree in Accounting/Finance</li>
                      <li>• Master's degree in related fields</li>
                      <li>• Recognized university qualifications</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Professional Exemptions</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ACCA members/students</li>
                      <li>• CIMA qualified accountants</li>
                      <li>• CPA and other recognized bodies</li>
                    </ul>
                  </div>
                </div>
                <Link to="/apply">
                  <Button className="bg-primary hover:bg-accent">Apply for Exemptions</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IAMA Qualification Structure */}
      <section id="qualification" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">IAMA Qualification Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle>Certificate Level</CardTitle>
                <CardDescription>Foundation Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Financial Accounting</li>
                  <li>• Management Accounting</li>
                  <li>• Business Economics</li>
                  <li>• Business Mathematics & Statistics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle>Managerial Level</CardTitle>
                <CardDescription>Professional Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Performance Management</li>
                  <li>• Financial Management</li>
                  <li>• Management Accounting</li>
                  <li>• Corporate Law & Governance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle>Advanced Level</CardTitle>
                <CardDescription>Strategic Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strategic Management Accounting</li>
                  <li>• Corporate Reporting</li>
                  <li>• Business Strategy</li>
                  <li>• Research & Analysis Project</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-16 bg-background">
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

      {/* Exam Structure */}
      <section id="exam-structure" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exam Structure</h2>
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

      {/* Study Options */}
      <section id="study-options" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Study Options</h2>
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

      {/* Fee & Key Dates */}
      <section id="fees" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Fee & Key Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <DollarSign className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Registration Fee</span>
                    <span className="font-semibold text-foreground">£150</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Certificate Level (per paper)</span>
                    <span className="font-semibold text-foreground">£120</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Managerial Level (per paper)</span>
                    <span className="font-semibold text-foreground">£150</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Advanced Level (per paper)</span>
                    <span className="font-semibold text-foreground">£180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual Subscription</span>
                    <span className="font-semibold text-foreground">£100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Calendar className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Key Dates 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">March Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Jan 15 | Exams: Mar 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">June Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Apr 15 | Exams: Jun 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">September Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Jul 15 | Exams: Sep 10-20</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">December Session</h4>
                    <p className="text-sm text-muted-foreground">Registration: Oct 15 | Exams: Dec 10-20</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Start Your IAMA Journey?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide and take the first step towards becoming a certified management accountant.
          </p>
          <Link to="/apply">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Student;
