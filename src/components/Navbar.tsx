import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block border-b border-border bg-background">
        <div className="container mx-auto flex items-center justify-end gap-6 py-2 text-xs font-body text-muted-foreground">
          <a href="mailto:info@bharatsecurity.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            Email: info@bharatsecurity.com
          </a>
          <a href="tel:+918123669142" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Call: +91 8123669142
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 font-body ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-display text-foreground">
                Bharat Security
              </span>
              <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Endeavouring For The Best
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-cyan-dark transition-colors"
            >
              Get in Touch
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
              className="lg:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="container mx-auto py-3 flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center"
                >
                  Get in Touch
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
