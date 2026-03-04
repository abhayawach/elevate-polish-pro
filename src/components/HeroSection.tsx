import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-security.jpg";

const slides = [
  {
    subtitle: "Lets protect your family, business, and assets.",
    title: "Integrated Physical Security",
    highlight: "& Manpower Solutions",
    description: "Understanding the need of Integrated Physical Security Solutions.",
    cta: { label: "Our Presence", to: "/about" },
  },
  {
    subtitle: "Lets protect your family, business, and assets.",
    title: "Inclusive Security Integration",
    highlight: "A Prahari for You",
    description: "Comprehensive security arrangements tailored to meet diverse sector needs.",
    cta: { label: "Know More", to: "/services" },
  },
  {
    subtitle: "Lets protect your family, business, and assets.",
    title: "Intuitive App Interface",
    highlight: "Our Robust Solution",
    description: "On-the-go monitoring ensures convenience and improved system efficiency.",
    cta: { label: "Connect for Demo?", to: "/contact" },
  },
];

const serviceCards = [
  { num: "01", title: "Professional Guards", desc: "Trained armed and unarmed guards proficient in protection of Individuals, Organizations and Institutions." },
  { num: "02", title: "Event Security Solutions", desc: "Comprehensive event security solutions designed to ensure the safety and seamless operation of any Event." },
  { num: "03", title: "Expert Shield Advisory", desc: "Expert security consulting designed to assess, analyze, and strengthen your organization's security posture." },
  { num: "04", title: "Cash Management Services", desc: "Secure transportation of cash, valuables, and sensitive items for banks and financial institutions." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative">
      {/* Hero slide area */}
      <div className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Bharat Security team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark))]/95 via-[hsl(var(--navy))]/80 to-transparent" />
        </div>

        {/* Slide content */}
        <div className="relative z-10 container mx-auto py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-primary font-body text-sm font-medium">
                  {slide.subtitle}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display leading-[1.15] mb-5 text-primary-foreground">
                {slide.title}
                <br />
                <span className="text-gradient-cyan">{slide.highlight}</span>
              </h1>

              <p className="text-base md:text-lg font-body leading-relaxed mb-8 max-w-xl text-primary-foreground/70">
                {slide.description}
              </p>

              <Link
                to={slide.cta.to}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-sm hover:bg-cyan-dark transition-all shadow-lg"
              >
                {slide.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-12">
            <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-3 bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % slides.length)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlapping service cards — matching reference */}
      <div className="container mx-auto relative z-20 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((card) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-4xl font-display text-muted/40 select-none">{card.num}</span>
              </div>
              <h3 className="text-base font-display text-foreground mb-2">{card.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
              <Link to="/services" className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center text-primary-foreground hover:bg-cyan-dark transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
