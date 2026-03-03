import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Warehouse Owner, Sharma Logistics",
    text: "Bharat Security Services has been protecting our warehouse for over 5 years. Their team is professional, reliable, and always responsive to our security needs.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    position: "Office Manager, Tech Solutions Pvt Ltd",
    text: "Excellent service for our corporate office. The security personnel are well-trained, courteous, and maintain excellent access control.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    position: "School Principal, Delhi Public School",
    text: "The security team for our school is exceptional. They understand child safety protocols and maintain a safe environment for our students.",
    rating: 5,
  },
  {
    name: "Sanjay Mehta",
    position: "President, Green Valley Apartments",
    text: "Professional service for our residential complex. Regular patrols and quick response to any security concerns. Highly recommended.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center relative"
            >
              <Quote className="w-10 h-10 text-gold/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < t.rating ? "text-gold fill-gold" : "text-muted"}`}
                  />
                ))}
              </div>
              <h4 className="text-lg font-bold font-display text-foreground">{t.name}</h4>
              <p className="text-sm text-muted-foreground font-body">{t.position}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-gold w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
