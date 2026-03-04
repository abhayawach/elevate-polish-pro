import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-security.jpg";

const bulletPoints = [
  "Close Protection",
  "Physical Security",
  "Event Security",
  "Corporate Security",
  "Housekeeping",
  "Risk Assessment",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute left-0 top-1/3 w-20 h-40 dot-pattern opacity-40" />
      <div className="absolute left-20 bottom-20 w-24 h-24 dot-pattern opacity-30" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Bharat Security founder and team"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating accent bar */}
            <div className="absolute -bottom-4 left-8 right-8 h-1.5 rounded-full bg-primary" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-5 mb-2 leading-tight">
              Legacy of Protection
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />

            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Bharat Security Services was founded in 1996 under the visionary
              leadership of <strong className="text-foreground">Sudhir Kumar Mishra</strong>,
              renowned for his exceptional contributions to security and community welfare.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Under his inspiring guidance, Bharat Security Services has upheld its mission
              of excellence and integrity, reflecting his values and commitment to service
              across industrial, commercial, and residential sectors.
            </p>

            {/* Bullet points grid — matching reference */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-body font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-sm hover:bg-cyan-dark transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
