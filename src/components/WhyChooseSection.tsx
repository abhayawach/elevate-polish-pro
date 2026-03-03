import { motion } from "framer-motion";
import { UserCheck, GraduationCap, Repeat, Settings } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Stringent Hiring Standards",
    description: "Rigorous background verification and selection ensures only the most qualified professionals join our team.",
  },
  {
    icon: GraduationCap,
    title: "Exceptional Training",
    description: "Continuous training programs ensure our guards are proficient in latest security protocols and emergency response.",
  },
  {
    icon: Repeat,
    title: "Unmatched Continuity",
    description: "High retention rates ensure clients receive consistent, expert service tailored to their unique security needs.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Customized security plans with advanced monitoring applications designed for each client's specific requirements.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            We Protect with <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="font-body max-w-2xl mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
            Combining expertly trained personnel with advanced security systems to deliver comprehensive, professional protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-7 rounded-2xl border border-primary-foreground/10 hover:border-gold/30 bg-primary-foreground/5 backdrop-blur-sm transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold font-display mb-3" style={{ color: "hsl(var(--primary-foreground))" }}>
                {feature.title}
              </h3>
              <p className="text-sm font-body leading-relaxed" style={{ color: "hsl(var(--primary-foreground) / 0.65)" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
