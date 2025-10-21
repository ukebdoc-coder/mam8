import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Recognition = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Recognition</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            IAMA qualifications are recognized and respected by leading organizations worldwide
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Global Recognition</h2>
            <p className="text-lg text-muted-foreground">
              IAMA is recognized by professional accounting bodies, universities, employers, and regulatory authorities in over 120 countries, making our qualification truly global in scope and acceptance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:shadow-primary transition-all">
              <CardHeader>
                <Globe className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Professional Bodies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  IAMA has reciprocal agreements and partnerships with leading accounting and finance bodies worldwide:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Association of Chartered Certified Accountants (ACCA)</li>
                  <li>• Chartered Institute of Management Accountants (CIMA)</li>
                  <li>• CPA Australia</li>
                  <li>• Institute of Chartered Accountants</li>
                  <li>• American Institute of CPAs (AICPA)</li>
                  <li>• And 25+ other professional bodies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-primary transition-all">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Universities & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Our qualification is recognized by universities for advanced standing and exemptions:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• University of London</li>
                  <li>• University of Manchester</li>
                  <li>• Singapore Management University</li>
                  <li>• Australian National University</li>
                  <li>• University of Toronto</li>
                  <li>• And 50+ other institutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-primary transition-all">
              <CardHeader>
                <Building2 className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Corporate Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Top employers across industries recognize IAMA qualifications:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fortune 500 companies</li>
                  <li>• Big Four accounting firms</li>
                  <li>• Investment banks and financial institutions</li>
                  <li>• Multinational corporations</li>
                  <li>• Government agencies</li>
                  <li>• Consulting firms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-primary transition-all">
              <CardHeader>
                <Award className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Regulatory Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Recognized by regulatory and government bodies for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional licensing requirements</li>
                  <li>• Public practice authorization</li>
                  <li>• Statutory auditor qualifications</li>
                  <li>• Government tender requirements</li>
                  <li>• Immigration professional points</li>
                  <li>• Professional visa categories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recognition by Region</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Europe & UK</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• United Kingdom</li>
                    <li>• Ireland</li>
                    <li>• Germany</li>
                    <li>• France</li>
                    <li>• Netherlands</li>
                    <li>• Switzerland</li>
                    <li>• And 15+ countries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Asia Pacific</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Singapore</li>
                    <li>• Australia</li>
                    <li>• India</li>
                    <li>• Malaysia</li>
                    <li>• Hong Kong</li>
                    <li>• New Zealand</li>
                    <li>• And 20+ countries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Americas & Middle East</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• United States</li>
                    <li>• Canada</li>
                    <li>• UAE</li>
                    <li>• Saudi Arabia</li>
                    <li>• Qatar</li>
                    <li>• Brazil</li>
                    <li>• And 25+ countries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Accreditations & Partnerships</h2>
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
                  <p className="text-muted-foreground text-sm">
                    IAMA maintains rigorous quality standards through regular reviews and external accreditation by international education and professional bodies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">International Memberships</h4>
                  <p className="text-muted-foreground text-sm">
                    We are proud members of the International Federation of Accountants (IFAC), ensuring our standards align with global best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Continuous Improvement</h4>
                  <p className="text-muted-foreground text-sm">
                    Our curriculum and examination standards are continuously updated to reflect changes in international accounting standards, business practices, and regulatory requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Earn a Globally Recognized Qualification</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join IAMA and gain a qualification that opens doors worldwide.
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

export default Recognition;
