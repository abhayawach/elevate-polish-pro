import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserCheck, GraduationCap, Repeat, Settings, ArrowRight } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Stringent Hiring Standards",
    description: "Our stringent selection process guarantees we hire only the most qualified professionals.",
  },
  {
    icon: GraduationCap,
    title: "Exceptional Training",
    description: "Training and development ensure consistent, expert service with unmatched standards.",
  },
  {
    icon: Repeat,
    title: "Unmatched Continuity",
    description: "Retention ensures clients receive expert service tailored to their unique security needs.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "We provide robust protection with skilled personnel and advanced security applications.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: heading and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-5 mb-2 leading-tight">
              We Protect with Excellence
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Bharat Security Services proudly stands as a premier provider of Integrated
              Security Solutions. Our expertise spans industrial, commercial, and corporate
              sectors, where we deliver professional security arrangements tailored to meet
              diverse needs. We combine expertly trained security personnel with advanced
              security systems to provide robust protection.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-sm hover:bg-cyan-dark transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: feature cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/20 hover:bg-primary/[0.03] transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-display text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
