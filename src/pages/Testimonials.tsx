import TestimonialsSection from "@/components/TestimonialsSection";

const Testimonials = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
            Client Reviews
          </h1>
          <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
            See what our valued clients have to say about our security services.
          </p>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
};

export default Testimonials;
