import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Warehouse, GraduationCap, Home, CalendarCheck, Shield, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Office Security",
    description: "Professional security for offices and IT parks with access control, surveillance and visitor management.",
    num: "01",
  },
  {
    icon: Warehouse,
    title: "Warehouse Security",
    description: "Complete protection for storage facilities with systematic patrolling and inventory safety protocols.",
    num: "02",
  },
  {
    icon: GraduationCap,
    title: "School & Campus Security",
    description: "Child-safe security protocols for educational institutions with trained, background-verified personnel.",
    num: "03",
  },
  {
    icon: Home,
    title: "Residential Security",
    description: "Round-the-clock gated community protection with visitor management and emergency response.",
    num: "04",
  },
  {
    icon: CalendarCheck,
    title: "Event Security",
    description: "Comprehensive crowd management and VIP protection for corporate events, exhibitions and functions.",
    num: "05",
  },
  {
    icon: Shield,
    title: "Personal Security",
    description: "Close protection officers and bodyguard services for high-profile individuals and executives.",
    num: "06",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
            Integrated Security <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We provide comprehensive security services tailored to meet the unique needs of every client across industrial, commercial, and residential sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative h-full p-7 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
                <span className="absolute top-6 right-6 text-5xl font-bold font-display text-muted/60 select-none">
                  {service.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-navy hover:text-gold transition-colors"
                >
                  Get Quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
