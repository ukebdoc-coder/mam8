import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, FileText, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      dob: formData.get("dob"),
      nationality: formData.get("nationality"),
      address: formData.get("address"),
      city: formData.get("city"),
      postcode: formData.get("postcode"),
      country: formData.get("country"),
      qualification: formData.get("qualification"),
      field: formData.get("field"),
      institution: formData.get("institution"),
      yearCompleted: formData.get("yearCompleted"),
      experience: formData.get("experience"),
      currentRole: formData.get("currentRole"),
      employer: formData.get("employer"),
      route: formData.get("route"),
      startingLevel: formData.get("startingLevel"),
      studyMode: formData.get("studyMode"),
      examSession: formData.get("examSession"),
      exemptionDetails: formData.get("exemptionDetails"),
      comments: formData.get("comments"),
    };

    const emailHtml = `
      <h2>New Application Submission</h2>

      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date of Birth:</strong> ${data.dob}</p>
      <p><strong>Nationality:</strong> ${data.nationality}</p>

      <h3>Address</h3>
      <p><strong>Street:</strong> ${data.address}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Postcode:</strong> ${data.postcode}</p>
      <p><strong>Country:</strong> ${data.country}</p>

      <h3>Educational Background</h3>
      <p><strong>Highest Qualification:</strong> ${data.qualification}</p>
      <p><strong>Field of Study:</strong> ${data.field}</p>
      <p><strong>Institution:</strong> ${data.institution}</p>
      <p><strong>Year Completed:</strong> ${data.yearCompleted}</p>

      <h3>Professional Experience</h3>
      <p><strong>Years of Experience:</strong> ${data.experience}</p>
      <p><strong>Current Role:</strong> ${data.currentRole || 'N/A'}</p>
      <p><strong>Employer:</strong> ${data.employer || 'N/A'}</p>

      <h3>Application Details</h3>
      <p><strong>Study Route:</strong> ${data.route}</p>
      <p><strong>Starting Level:</strong> ${data.startingLevel}</p>
      <p><strong>Study Mode:</strong> ${data.studyMode}</p>
      <p><strong>Exam Session:</strong> ${data.examSession}</p>

      <h3>Additional Information</h3>
      <p><strong>Exemption Details:</strong> ${data.exemptionDetails || 'N/A'}</p>
      <p><strong>Comments:</strong> ${data.comments || 'N/A'}</p>
    `;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            to: "hashirsaqib2008@gmail.com",
            subject: `New Application: ${data.firstName} ${data.lastName}`,
            html: emailHtml,
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and contact you within 5 business days.",
        });
        (e.target as HTMLFormElement).reset();
        setAgreedToTerms(false);
      } else {
        throw new Error("Failed to send application");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Apply Online</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Begin your journey to becoming a Certified Management Accountant
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete the online form with your details"
              },
              {
                step: "2",
                title: "Document Verification",
                description: "Upload required documents for review"
              },
              {
                step: "3",
                title: "Assessment",
                description: "We review your qualifications and exemptions"
              },
              {
                step: "4",
                title: "Confirmation",
                description: "Receive confirmation and start your studies"
              }
            ].map((phase, index) => (
              <Card key={index} className="bg-card border-border text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-accent rotate-45"></div>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <span className="text-xl font-bold">{phase.step}</span>
                  </div>
                  <CardTitle className="text-base">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  Please provide accurate information. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="Enter first name"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Enter last name"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+44 20 1234 5678"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input
                          id="dob"
                          type="date"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Select required>
                          <SelectTrigger id="nationality" className="bg-background border-border">
                            <SelectValue placeholder="Select nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="sg">Singapore</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Address</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          required
                          placeholder="Enter street address"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            required
                            placeholder="Enter city"
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postcode">Postcode *</Label>
                          <Input
                            id="postcode"
                            required
                            placeholder="Enter postcode"
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Select required>
                            <SelectTrigger id="country" className="bg-background border-border">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="in">India</SelectItem>
                              <SelectItem value="sg">Singapore</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Educational Background */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Educational Background</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="qualification">Highest Qualification *</Label>
                        <Select required>
                          <SelectTrigger id="qualification" className="bg-background border-border">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="professional">Professional Qualification</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field">Field of Study *</Label>
                        <Input
                          id="field"
                          required
                          placeholder="e.g., Accounting, Finance, Business"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution Name *</Label>
                        <Input
                          id="institution"
                          required
                          placeholder="Enter institution name"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yearCompleted">Year Completed *</Label>
                        <Input
                          id="yearCompleted"
                          type="number"
                          required
                          placeholder="YYYY"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Professional Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select required>
                          <SelectTrigger id="experience" className="bg-background border-border">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No experience</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="4-7">4-7 years</SelectItem>
                            <SelectItem value="8-10">8-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentRole">Current Role</Label>
                        <Input
                          id="currentRole"
                          placeholder="e.g., Financial Analyst"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="employer">Current Employer</Label>
                        <Input
                          id="employer"
                          placeholder="Enter company name"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Application Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="route">Study Route *</Label>
                        <Select required>
                          <SelectTrigger id="route" className="bg-background border-border">
                            <SelectValue placeholder="Select route" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="undergraduate">Undergraduate/Graduate</SelectItem>
                            <SelectItem value="professional">Professional Qualification</SelectItem>
                            <SelectItem value="mature">Mature Student</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startingLevel">Preferred Starting Level *</Label>
                        <Select required>
                          <SelectTrigger id="startingLevel" className="bg-background border-border">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="certificate">Certificate Level</SelectItem>
                            <SelectItem value="managerial">Managerial Level</SelectItem>
                            <SelectItem value="advanced">Advanced Level</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studyMode">Preferred Study Mode *</Label>
                        <Select required>
                          <SelectTrigger id="studyMode" className="bg-background border-border">
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self">Self-Study</SelectItem>
                            <SelectItem value="classroom">Classroom</SelectItem>
                            <SelectItem value="blended">Blended Learning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="examSession">Intended Exam Session *</Label>
                        <Select required>
                          <SelectTrigger id="examSession" className="bg-background border-border">
                            <SelectValue placeholder="Select session" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="march">March 2025</SelectItem>
                            <SelectItem value="june">June 2025</SelectItem>
                            <SelectItem value="september">September 2025</SelectItem>
                            <SelectItem value="december">December 2025</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Exemptions */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Exemption Application (Optional)</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exemptions" />
                        <Label htmlFor="exemptions" className="text-sm">
                          I wish to apply for exemptions based on prior qualifications
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="exemptionDetails">Exemption Details</Label>
                        <Textarea
                          id="exemptionDetails"
                          placeholder="Please provide details of qualifications you hold (e.g., ACCA, CIMA, CPA, relevant degree)"
                          className="bg-background border-border min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="comments">Comments or Questions</Label>
                      <Textarea
                        id="comments"
                        placeholder="Any additional information you'd like to share or questions about your application"
                        className="bg-background border-border min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I confirm that the information provided is accurate and complete. I have read and agree to IAMA's terms and conditions, privacy policy, and understand that false information may result in application rejection or membership termination.
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent" disabled={isSubmitting}>
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-accent" />
                  Required Documents
                </CardTitle>
                <CardDescription>
                  Please prepare the following documents. You'll be asked to upload them after submitting your initial application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Passport-sized photograph (recent)",
                    "Copy of passport or national ID",
                    "Academic transcripts and degree certificates",
                    "Professional qualification certificates (if applicable)",
                    "Employment verification letter (if applicable)",
                    "Proof of address (utility bill or bank statement)"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Need Help with Your Application?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to assist you throughout the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Contact Admissions
            </Button>
            <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">
              Download Application Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
