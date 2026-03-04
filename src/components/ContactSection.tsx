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

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/50";

  return (
    <section className="section-padding bg-muted/30" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-5 mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to secure your premises? Contact us for a free consultation and custom security plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-body text-foreground">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
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
            className="lg:col-span-3 bg-card rounded-2xl border border-border p-7 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Full Name</label>
                <input type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass} placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Phone Number</label>
                <input type="tel" required value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass} placeholder="+91 XXXXXXXXXX" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Email</label>
                <input type="email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass} placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-1.5">Service Required</label>
                <select value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={inputClass}>
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
              <textarea rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`} placeholder="Tell us about your security needs..." />
            </div>
            <button type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-sm hover:bg-cyan-dark transition-colors w-full md:w-auto justify-center">
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
