import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Warehouse, GraduationCap, Home, CalendarCheck, UserCheck, ArrowRight, X, CheckCircle2, Shield } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Office Security",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
    description: "Professional security for offices, IT parks with access control and surveillance. Our trained personnel manage visitor logs, CCTV monitoring, and emergency protocols.",
    features: ["Access Control", "CCTV Monitoring", "Visitor Management", "Fire Safety"],
    detailedDescription: "Our corporate office security solutions provide end-to-end protection for modern workplaces. We deploy highly trained security professionals who manage sophisticated access control systems, real-time CCTV surveillance, and comprehensive visitor management protocols. Our team is equipped to handle emergency situations with predefined response plans, ensuring minimal disruption to your business operations. We also conduct regular security audits and vulnerability assessments to keep your premises safe.",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop",
    ],
    highlights: ["24/7 trained security personnel", "Advanced CCTV & surveillance systems", "Biometric & card-based access control", "Emergency response protocols", "Regular security audits", "Visitor tracking & management"]
  },
  {
    icon: Warehouse,
    title: "Warehouse Security",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Complete protection for storage facilities with systematic patrolling, inventory safety, and entry-exit management for vehicles and personnel.",
    features: ["Perimeter Patrol", "Entry-Exit Logs", "Night Surveillance", "Theft Prevention"],
    detailedDescription: "Our warehouse security services ensure comprehensive protection of your valuable inventory and assets. We implement systematic patrolling schedules, maintain detailed entry-exit logs for all vehicles and personnel, and provide round-the-clock surveillance with a focus on high-risk areas. Our guards are trained in theft prevention techniques and can quickly identify suspicious activities. We also coordinate with local law enforcement for rapid response when needed.",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
    ],
    highlights: ["Systematic perimeter patrolling", "Vehicle & personnel entry-exit logs", "Night vision surveillance", "Theft & pilferage prevention", "Inventory area monitoring", "Emergency alarm systems"]
  },
  {
    icon: GraduationCap,
    title: "School & Campus Security",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    description: "Child-safe security protocols for educational institutions with background-verified, trained personnel who understand campus safety requirements.",
    features: ["Child Safety", "Gate Management", "Emergency Drills", "Background Verified"],
    detailedDescription: "We specialize in creating safe learning environments with security protocols designed specifically for educational institutions. All our campus security personnel undergo thorough background verification and are trained in child safety protocols. We manage gate operations, conduct regular emergency drills, and maintain strict visitor authentication processes. Our approach balances security with a welcoming atmosphere that supports the educational mission.",
    gallery: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=500&fit=crop",
    ],
    highlights: ["Background-verified security staff", "Child-safe protocols", "Gate & visitor management", "Regular emergency drills", "Anti-bullying patrol support", "Parent pick-up coordination"]
  },
  {
    icon: Home,
    title: "Residential Security",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    description: "Round-the-clock gated community protection with visitor management, patrol schedules, and immediate emergency response capabilities.",
    features: ["24/7 Guards", "Visitor Logs", "Patrol Schedule", "Emergency Response"],
    detailedDescription: "Our residential security services provide peace of mind for gated communities, apartment complexes, and individual homes. We deploy courteous yet vigilant guards who manage visitor access, maintain patrol schedules, and respond immediately to emergencies. Our team integrates seamlessly with existing security infrastructure including intercoms, CCTV, and alarm systems to create a multi-layered protection approach for residents.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop",
    ],
    highlights: ["24/7 guard deployment", "Visitor authentication & logs", "Scheduled & random patrols", "Emergency response team", "CCTV integration support", "Common area monitoring"]
  },
  {
    icon: CalendarCheck,
    title: "Event Security",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Comprehensive crowd management and VIP protection for corporate events, exhibitions, weddings, and large public gatherings.",
    features: ["Crowd Control", "VIP Protection", "Metal Detection", "Emergency Planning"],
    detailedDescription: "From corporate conferences to large public gatherings, our event security team ensures smooth and safe experiences for all attendees. We provide crowd management, VIP protection, metal detection screening, and comprehensive emergency planning. Our team works closely with event organizers to develop tailored security plans that address specific venue challenges and potential risks while maintaining a positive atmosphere.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
    ],
    highlights: ["Crowd management & flow control", "VIP & dignitary protection", "Metal detection screening", "Emergency evacuation plans", "Parking & perimeter security", "Coordination with local authorities"]
  },
  {
    icon: UserCheck,
    title: "Personal Security",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    description: "Close protection officers and bodyguard services for high-profile individuals, business executives, and families requiring personal safety.",
    features: ["Bodyguard Service", "Route Planning", "Threat Assessment", "Discreet Protection"],
    detailedDescription: "Our personal security services offer discreet, professional close protection for individuals who require enhanced safety. Our bodyguards are trained in threat assessment, route planning, and defensive tactics. Whether you're a business executive, public figure, or family requiring personal safety, we tailor our protection approach to your lifestyle and risk profile, ensuring seamless security without compromising your daily routine.",
    gallery: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
    ],
    highlights: ["Trained close protection officers", "Advance route planning", "Comprehensive threat assessment", "Discreet & professional", "Travel security coordination", "24/7 on-call availability"]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
          <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
          <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
        </svg>
        <svg className="absolute top-0 left-0 w-full h-24 z-[1] rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="animate-[wave_7s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.06)" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[hsl(var(--cyan)/0.1)] blur-2xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[hsl(var(--cyan)/0.07)] blur-2xl animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
            Security Solutions
          </h1>
          <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
            Comprehensive security services tailored to meet diverse needs across all sectors.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <img src={service.image} alt={service.title} className="w-full h-72 md:h-80 object-cover rounded-xl shadow-md" />
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full text-xs font-medium font-body bg-primary/5 text-primary border border-primary/15">
                      {f}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedService(i)}
                  className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:text-cyan-dark transition-colors cursor-pointer"
                >
                  View More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-screen Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="min-h-screen"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="fixed top-6 right-6 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const service = services[selectedService];
                return (
                  <div className="container mx-auto px-4 py-16 md:py-20">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-display text-foreground">{service.title}</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {service.features.map((f) => (
                            <span key={f} className="px-3 py-1 rounded-full text-xs font-medium font-body bg-primary/10 text-primary border border-primary/20">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hero image */}
                    <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                      <img
                        src={service.gallery[0]}
                        alt={service.title}
                        className="w-full h-64 md:h-96 object-cover"
                      />
                    </div>

                    {/* Content grid */}
                    <div className="grid md:grid-cols-3 gap-10 mb-12">
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" /> About This Service
                        </h3>
                        <p className="text-muted-foreground font-body leading-relaxed text-base">
                          {service.detailedDescription}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" /> Key Highlights
                        </h3>
                        <ul className="space-y-3">
                          {service.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Photo gallery */}
                    <h3 className="text-xl font-display text-foreground mb-5">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                      {service.gallery.map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="rounded-xl overflow-hidden shadow-md group"
                        >
                          <img
                            src={img}
                            alt={`${service.title} ${idx + 1}`}
                            className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12 border border-border">
                      <h3 className="text-2xl font-display text-foreground mb-3">Interested in {service.title}?</h3>
                      <p className="text-muted-foreground font-body mb-6 max-w-lg mx-auto">
                        Contact us today for a free consultation and customized security plan tailored to your needs.
                      </p>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold font-body hover:bg-primary/90 transition-colors"
                      >
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
