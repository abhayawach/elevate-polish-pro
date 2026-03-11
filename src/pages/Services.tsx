import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Warehouse, GraduationCap, Home, CalendarCheck, UserCheck, ArrowRight } from "lucide-react";

const services = [
{
  icon: Building2,
  title: "Corporate Office Security",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
  description: "Professional security for offices, IT parks with access control and surveillance. Our trained personnel manage visitor logs, CCTV monitoring, and emergency protocols.",
  features: ["Access Control", "CCTV Monitoring", "Visitor Management", "Fire Safety"]
},
{
  icon: Warehouse,
  title: "Warehouse Security",
  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  description: "Complete protection for storage facilities with systematic patrolling, inventory safety, and entry-exit management for vehicles and personnel.",
  features: ["Perimeter Patrol", "Entry-Exit Logs", "Night Surveillance", "Theft Prevention"]
},
{
  icon: GraduationCap,
  title: "School & Campus Security",
  image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  description: "Child-safe security protocols for educational institutions with background-verified, trained personnel who understand campus safety requirements.",
  features: ["Child Safety", "Gate Management", "Emergency Drills", "Background Verified"]
},
{
  icon: Home,
  title: "Residential Security",
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
  description: "Round-the-clock gated community protection with visitor management, patrol schedules, and immediate emergency response capabilities.",
  features: ["24/7 Guards", "Visitor Logs", "Patrol Schedule", "Emergency Response"]
},
{
  icon: CalendarCheck,
  title: "Event Security",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  description: "Comprehensive crowd management and VIP protection for corporate events, exhibitions, weddings, and large public gatherings.",
  features: ["Crowd Control", "VIP Protection", "Metal Detection", "Emergency Planning"]
},
{
  icon: UserCheck,
  title: "Personal Security",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
  description: "Close protection officers and bodyguard services for high-profile individuals, business executives, and families requiring personal safety.",
  features: ["Bodyguard Service", "Route Planning", "Threat Assessment", "Discreet Protection"]
}];


const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        {/* Animated wave layers */}
        <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
          <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
          <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
        </svg>
        {/* Top wave */}
        <svg className="absolute top-0 left-0 w-full h-24 z-[1] rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="animate-[wave_7s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.06)" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,100 L0,100 Z" />
        </svg>
        {/* Floating gradient orbs */}
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
          {services.map((service, i) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid md:grid-cols-2 gap-8 items-center`}>
            
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <img src={service.image} alt={service.title} className="w-full h-72 md:h-80 object-cover rounded-xl shadow-md" />
              </div>
              <div className="">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) =>
                <span key={f} className="px-3 py-1 rounded-full text-xs font-medium font-body bg-primary/5 text-primary border border-primary/15">
                      {f}
                    </span>
                )}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:text-cyan-dark transition-colors">
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>);

};

export default Services;