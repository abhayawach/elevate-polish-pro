import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="gradient-navy pt-14 pb-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-display text-primary-foreground">
                Bharat Security
              </span>
            </Link>
            <p className="text-sm font-body leading-relaxed text-primary-foreground/50">
              Trusted security solutions since 1996, protecting businesses, homes, and assets across Pune with professional and reliable personnel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-body text-primary-foreground/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {["Corporate Security", "Warehouse Security", "Residential Security", "Event Security", "School Security"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm font-body text-primary-foreground/50 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+918123669142" className="text-sm font-body text-primary-foreground/50 hover:text-primary transition-colors">
                  +91 8123669142
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@bharatsecurity.com" className="text-sm font-body text-primary-foreground/50 hover:text-primary transition-colors">
                  info@bharatsecurity.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-body text-primary-foreground/50">
                  Shop No 30L, Rama Equator, Near Morawadi Chowk, Pimpri-411018
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-5">
          <p className="text-center text-xs font-body text-primary-foreground/30">
            © {new Date().getFullYear()} Bharat Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
