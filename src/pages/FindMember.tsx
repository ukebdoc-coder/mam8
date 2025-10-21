import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, Award, Mail } from "lucide-react";
import { useState } from "react";

const FindMember = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState("");

  // Mock member data
  const mockMembers = [
    {
      name: "Dr. Sarah Johnson",
      designation: "FCMA",
      country: "United Kingdom",
      city: "London",
      specialty: "Financial Reporting",
      company: "Global Finance Corp",
      email: "sarah.j@example.com"
    },
    {
      name: "Michael Chen",
      designation: "ACMA",
      country: "Singapore",
      city: "Singapore",
      specialty: "Management Accounting",
      company: "Asia Pacific Holdings",
      email: "m.chen@example.com"
    },
    {
      name: "Emma Williams",
      designation: "FCMA",
      country: "Australia",
      city: "Sydney",
      specialty: "Strategic Planning",
      company: "Strategic Solutions Ltd",
      email: "e.williams@example.com"
    },
    {
      name: "David Martinez",
      designation: "ACMA",
      country: "United States",
      city: "New York",
      specialty: "Cost Management",
      company: "Finance Innovations Inc",
      email: "d.martinez@example.com"
    },
    {
      name: "Priya Patel",
      designation: "ACMA",
      country: "India",
      city: "Mumbai",
      specialty: "Performance Management",
      company: "Global Tech Services",
      email: "p.patel@example.com"
    },
    {
      name: "James O'Connor",
      designation: "FCMA",
      country: "Ireland",
      city: "Dublin",
      specialty: "Risk Management",
      company: "European Finance Group",
      email: "j.oconnor@example.com"
    }
  ];

  const [displayedMembers] = useState(mockMembers);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Find a Member</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Connect with IAMA certified professionals worldwide for networking, collaboration, and professional support
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-6 h-6 mr-2 text-accent" />
                Search Member Directory
              </CardTitle>
              <CardDescription>
                Find IAMA members by name, location, or area of expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Member Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select value={searchCountry} onValueChange={setSearchCountry}>
                    <SelectTrigger id="country" className="bg-background border-border">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
              </div>
              <Button className="bg-primary hover:bg-accent w-full md:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Search Members
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Search Results</h2>
              <p className="text-muted-foreground">Showing {displayedMembers.length} members</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedMembers.map((member, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-primary transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Award className="w-4 h-4 mr-1 text-accent" />
                          {member.designation}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent" />
                      {member.city}, {member.country}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4 mr-2 text-accent" />
                      {member.company}
                    </div>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground">
                        {member.specialty}
                      </span>
                    </div>
                    <div className="pt-3">
                      <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Member
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Connect with IAMA Members?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-lg">Professional Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build valuable connections with qualified professionals across industries and geographies
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Award className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-lg">Expert Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seek guidance from experienced professionals in specialized areas of management accounting
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <Search className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-lg">Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover new career opportunities and potential collaborations with fellow members
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Privacy & Directory Listing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                The IAMA member directory is available exclusively to current IAMA members. Members can control their visibility and contact preferences through their member portal.
              </p>
              <p>
                All information displayed is provided voluntarily by members. IAMA respects member privacy and complies with data protection regulations.
              </p>
              <p className="text-sm">
                To update your directory listing or privacy settings, please log in to the member portal or contact our membership team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindMember;
