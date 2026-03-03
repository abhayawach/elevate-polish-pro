import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Phone", detail: "+91 8123669142", link: "tel:+918123669142" },
  { icon: Mail, title: "Email", detail: "info@bharatsecurity.com", link: "mailto:info@bharatsecurity.com" },
  { icon: MapPin, title: "Address", detail: "Shop No 30L, Rama Equator, Near Morawadi Chowk, Pimpri-411018" },
  { icon: Clock, title: "Hours", detail: "Mon-Sat: 9:00 AM - 10:00 PM" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will contact you soon.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section className="section-padding bg-muted/30" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to secure your premises? Contact us for a free consultation and custom security plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-body text-foreground">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                >
                  <option value="">Select a service</option>
                  <option>Corporate Office Security</option>
                  <option>Warehouse Security</option>
                  <option>School Security</option>
                  <option>Residential Security</option>
                  <option>Event Security</option>
                  <option>Personal Security</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium font-body text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                placeholder="Tell us about your security needs..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-navy font-semibold font-body text-primary-foreground hover:bg-navy-light transition-colors w-full md:w-auto justify-center"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
