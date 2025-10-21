import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">IAMA</h3>
            <p className="text-muted-foreground text-sm">
              International Association of Management Accountants - Your gateway to professional excellence in management accounting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/student" className="text-muted-foreground hover:text-accent text-sm transition-colors">IAMA Student</Link></li>
              <li><Link to="/members" className="text-muted-foreground hover:text-accent text-sm transition-colors">Membership</Link></li>
              <li><Link to="/cpd" className="text-muted-foreground hover:text-accent text-sm transition-colors">CPD</Link></li>
              <li><Link to="/apply" className="text-muted-foreground hover:text-accent text-sm transition-colors">Apply Online</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/student#syllabus" className="text-muted-foreground hover:text-accent text-sm transition-colors">Syllabus</Link></li>
              <li><Link to="/student#exemptions" className="text-muted-foreground hover:text-accent text-sm transition-colors">Exemptions</Link></li>
              <li><Link to="/student#exam-structure" className="text-muted-foreground hover:text-accent text-sm transition-colors">Exam Structure</Link></li>
              <li><Link to="/find-member" className="text-muted-foreground hover:text-accent text-sm transition-colors">Find a Member</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>info@iama.org.uk</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>0044 7926 4183 80</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Office F26 Fairgate House, 205 Kings Road, Tyseley, Birmingham, England, B11 2AA</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} International Association of Management Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
