import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between py-2 text-sm font-body">
          <div className="flex items-center gap-6">
            <a href="tel:+918123669142" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 8123669142
            </a>
            <a href="mailto:info@bharatsecurity.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@bharatsecurity.com
            </a>
          </div>
          <span className="text-primary-foreground/60">Trusted Security Since 1996</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 font-body ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-display text-foreground leading-tight">
                Bharat <span className="text-gold">Security</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold hidden sm:block">
                Services
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-navy text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-navy font-semibold text-sm hover:bg-gold-dark transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-card overflow-hidden"
            >
              <div className="container mx-auto py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-navy text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 px-4 py-3 rounded-lg bg-gold text-navy font-semibold text-sm text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
