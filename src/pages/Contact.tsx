import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
            Let's Talk
          </h1>
          <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
            Get in touch for a free consultation and customized security plan for your needs.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Contact;
