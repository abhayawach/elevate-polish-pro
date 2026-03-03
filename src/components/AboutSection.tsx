import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about-security.jpg";

const highlights = [
  { icon: Award, label: "Licensed & Certified" },
  { icon: Users, label: "500+ Trained Guards" },
  { icon: Clock, label: "24/7 Service" },
  { icon: ShieldCheck, label: "100% Background Verified" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
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
                alt="Security professional"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-lg hidden md:block">
              <div className="text-3xl font-bold font-display text-navy">29+</div>
              <div className="text-sm font-body font-medium text-navy/80">Years of Trust</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-6">
              Legacy of <span className="text-gradient-gold">Protection</span> & Excellence
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Founded by <strong className="text-foreground">Sudhir Kumar Mishra</strong> in 1996,
              Bharat Security Services started as a small agency with a big vision—to provide
              uncompromised, professional security to businesses and families across Pune.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Today, we stand as Pune's most trusted security partner with over 500 trained
              personnel serving 200+ satisfied clients across corporate, industrial, residential,
              and educational sectors.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm font-medium font-body text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy font-semibold font-body text-primary-foreground hover:bg-navy-light transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
