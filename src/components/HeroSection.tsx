import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-security.jpg";

const stats = [
  { value: "29+", label: "Years Experience" },
  { value: "500+", label: "Security Personnel" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Active Protection" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bharat Security team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">
              Trusted Security Since 1996
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6"
            style={{ color: "hsl(var(--primary-foreground))" }}
          >
            Protecting What{" "}
            <span className="text-gradient-gold">Matters Most</span> to You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl"
            style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}
          >
            Professional security solutions for corporate offices, warehouses,
            residential complexes, and events across Pune.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold font-semibold font-body text-navy hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918123669142"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-primary-foreground/30 font-semibold font-body hover:bg-primary-foreground/10 transition-all"
              style={{ color: "hsl(var(--primary-foreground))" }}
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm"
            style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}
          >
            {["Licensed & Certified", "Trained Personnel", "24/7 Monitoring"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card/95 backdrop-blur-md rounded-t-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border"
            style={{ boxShadow: "var(--shadow-xl)" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 md:py-6 px-6 text-center">
                <div className="text-2xl md:text-3xl font-bold font-display text-navy">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
