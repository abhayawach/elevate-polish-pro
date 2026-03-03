import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="gradient-navy pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display" style={{ color: "hsl(var(--primary-foreground))" }}>
                  Bharat <span className="text-gold">Security</span>
                </h3>
              </div>
            </Link>
            <p className="text-sm font-body leading-relaxed" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>
              Trusted security solutions since 1996, protecting businesses, homes, and assets across Pune with professional and reliable personnel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-body uppercase tracking-wider text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-body transition-colors hover:text-gold"
                    style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold font-body uppercase tracking-wider text-gold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Corporate Security", "Warehouse Security", "Residential Security", "Event Security", "School Security"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm font-body transition-colors hover:text-gold"
                    style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold font-body uppercase tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:+918123669142" className="text-sm font-body hover:text-gold transition-colors" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>
                  +91 8123669142
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@bharatsecurity.com" className="text-sm font-body hover:text-gold transition-colors" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>
                  info@bharatsecurity.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm font-body" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>
                  Shop No 30L, Rama Equator, Near Morawadi Chowk, Pimpri-411018
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6" style={{ borderColor: "hsl(var(--primary-foreground) / 0.1)" }}>
          <p className="text-center text-xs font-body" style={{ color: "hsl(var(--primary-foreground) / 0.4)" }}>
            © {new Date().getFullYear()} Bharat Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
