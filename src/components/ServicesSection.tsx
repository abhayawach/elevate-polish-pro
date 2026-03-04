import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Eye, Users, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training",
    description: "We provide rigorous training to ensure top-notch safety and security for client properties.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
  {
    icon: Eye,
    title: "Digital Supervision",
    description: "Effective supervision ensures quality service, team morale, and client satisfaction.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Security Manpower",
    description: "Our security manpower protect people, property, and assets with vigilance and discipline.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "We ensure swift, efficient deployment for seamless housekeeping services to clients.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-5 mb-3">
            Introduction to Physical Security
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            We are proud to be a premier provider of Physical Security Solutions, catering
            to industrial, commercial, and business organizations with comprehensive, professional services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 -mt-10 relative z-10 border-2 border-card bg-card">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary hover:text-cyan-dark transition-colors"
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
