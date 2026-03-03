import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <section className="relative py-20 md:py-28 gradient-navy overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Let's <span className="text-gradient-gold">Talk</span>
          </h1>
          <p className="font-body max-w-2xl mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
            Get in touch for a free consultation and customized security plan for your needs.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Contact;
