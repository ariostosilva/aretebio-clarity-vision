import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">areteBio</h3>
            <p className="text-primary-foreground/80 text-sm">
              Transforming cancer care through personalized, narrative-driven AI tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/research" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Research
              </Link>
              <Link to="/publications" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Publications
              </Link>
              <Link to="/team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Team
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <a
              href="mailto:contact@aretebio.life"
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>contact@aretebio.life</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} areteBio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
