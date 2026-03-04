import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Heart } from "lucide-react";
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
      <section className="page-hero">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
            Our Story of Trust
          </h1>
          <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
            29+ years of unwavering commitment to safety, security, and service excellence.
          </p>
          <div className="flex justify-center gap-10 mt-10">
            {[{ v: "29+", l: "Years" }, { v: "500+", l: "Personnel" }, { v: "200+", l: "Clients" }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-display text-primary">{s.v}</div>
                <div className="text-sm font-body text-primary-foreground/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={aboutImg} alt="About Bharat Security" className="w-full h-[420px] object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-tag">Our Story</span>
            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">Building Trust Since 1996</h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-5" />
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
          <div className="text-center mb-12">
            <span className="section-tag">Our Values</span>
            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">What We Stand For</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <span className="section-tag">Milestones</span>
            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">Our Journey</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
          </div>
          <div className="space-y-5">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-lg font-display text-primary">{m.year}</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
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
