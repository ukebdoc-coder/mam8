import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      name: "Start Your Journey",
      items: [
        { name: "Our Qualification", path: "/our-qualification" },
        { name: "Your Professional Career", path: "/professional-career" },
        { name: "Why IAMA", path: "/why-iama" },
        { name: "Recognition", path: "/recognition" },
      ],
    },
    {
      name: "IAMA Student",
      items: [
        { name: "Why Choose IAMA", path: "/student/why-choose" },
        { name: "Study Routes", path: "/student/study-routes" },
        { name: "Exemptions", path: "/student/exemptions" },
        { name: "IAMA Qualification", path: "/student/qualification" },
        { name: "Syllabus", path: "/student/syllabus" },
        { name: "Exam Structure", path: "/student/exam-structure" },
        { name: "Study Options", path: "/student/study-options" },
        { name: "Fee & Key Dates", path: "/student/fees" },
      ],
    },
    {
      name: "Members",
      items: [
        { name: "Why Become IAMA Member", path: "/members/why-become" },
        { name: "Compliance Requirements", path: "/members/compliance" },
        { name: "Member Benefits", path: "/members/benefits" },
      ],
    },
  ];

  const simpleItems = [
    { name: "CPD", path: "/cpd" },
    { name: "Find a Member", path: "/find-member" },
    { name: "Apply Online", path: "/apply" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="w-full px-6">
        {/* 3-column grid ensures perfect alignment */}
        <div className="grid grid-cols-[auto,1fr,auto] items-center h-20 w-full">
          
          {/* LEFT: Logo + Name */}
          <div className="flex items-center justify-start space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/iamalogo.png"
                alt="IAMA Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="leading-tight">
<h1 className="text-xl font-bold" style={{ color: '#550000' }}>
  International Association of Management Accountants
</h1>
                
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden lg:flex justify-center items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Button variant="ghost" className="flex items-center font-medium">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>

                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                            isActive(subItem.path)
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {simpleItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={isActive(item.path) ? "bg-primary text-primary-foreground" : ""}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* RIGHT: Buttons */}
          <div className="hidden lg:flex justify-end items-center space-x-3">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Apply Now
              </Button>
            </Link>
            <a
              href="https://lms.iama.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 font-semibold">
                Login to Moodle
              </Button>
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 bg-card border-t border-border">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="px-4 py-2 font-semibold text-foreground">{item.name}</div>
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(subItem.path) ? "default" : "ghost"}
                      className={`w-full justify-start pl-8 ${
                        isActive(subItem.path)
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                    >
                      {subItem.name}
                    </Button>
                  </Link>
                ))}
              </div>
            ))}

            {simpleItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}

            <div className="px-4 pt-2 space-y-2">
              <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://lms.iama.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-accent hover:bg-accent/90 font-semibold">
                  Login to Moodle
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
