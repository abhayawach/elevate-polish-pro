import TestimonialsSection from "@/components/TestimonialsSection";

const Testimonials = () => {
  return (
    <>
      <section className="relative py-20 md:py-28 gradient-navy overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Client <span className="text-gradient-gold">Reviews</span>
          </h1>
          <p className="font-body max-w-2xl mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
            See what our valued clients have to say about our security services.
          </p>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
};

export default Testimonials;
