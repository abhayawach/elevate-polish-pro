import { motion } from "framer-motion";
import { Award, Users, Clock, ShieldCheck, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/about-security.jpg";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We uphold the highest standards of honesty and ethical conduct." },
  { icon: Target, title: "Excellence", desc: "Relentless pursuit of the highest quality in every aspect of our service." },
  { icon: Users, title: "Teamwork", desc: "Collaboration and mutual respect drive our success as a united force." },
  { icon: Heart, title: "Commitment", desc: "Dedicated to our clients' safety and satisfaction beyond expectations." },
];

const milestones = [
  { year: "1996", event: "Founded by Sudhir Kumar Mishra in Pune" },
  { year: "2003", event: "Expanded to 100+ security personnel" },
  { year: "2010", event: "Became a leading security provider in PCMC region" },
  { year: "2018", event: "Crossed 200+ active clients milestone" },
  { year: "2024", event: "500+ trained guards serving across Maharashtra" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 gradient-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Our Story of <span className="text-gradient-gold">Trust</span>
          </h1>
          <p className="font-body max-w-2xl mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
            29+ years of unwavering commitment to safety, security, and service excellence.
          </p>
          <div className="flex justify-center gap-8 mt-10">
            {[{ v: "29+", l: "Years" }, { v: "500+", l: "Personnel" }, { v: "200+", l: "Clients" }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold font-display text-gold">{s.v}</div>
                <div className="text-sm font-body" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="About Bharat Security" className="w-full h-[450px] object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-tag">Our Story</span>
            <h2 className="text-3xl font-bold font-display text-foreground mt-4 mb-6">Building Trust Since 1996</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Founded by <strong className="text-foreground">Sudhir Kumar Mishra</strong>, Bharat Security Services began as a small security agency with a mission to provide reliable, honest, and professional security services.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With deep roots in the ex-servicemen community and a commitment to discipline, our founder built a team that treats every client's security as their personal responsibility.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Today, we are one of Pune's most respected security firms, serving 200+ clients across corporate, industrial, residential, and educational sectors with over 500 trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Our Values</span>
            <h2 className="text-3xl font-bold font-display text-foreground mt-4">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-bold font-display text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-14">
            <span className="section-tag">Milestones</span>
            <h2 className="text-3xl font-bold font-display text-foreground mt-4">Our Journey</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-lg font-bold font-display text-gold">{m.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-foreground font-body">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
