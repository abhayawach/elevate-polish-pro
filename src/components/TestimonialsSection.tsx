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
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mt-5">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-8 md:p-12 text-center"
            >
              <Quote className="w-8 h-8 text-primary/40 mx-auto mb-5" />
              <p className="text-lg md:text-xl font-body text-primary-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-primary-foreground/20"}`}
                  />
                ))}
              </div>
              <h4 className="text-lg font-display text-primary-foreground">{t.name}</h4>
              <p className="text-sm text-primary-foreground/50 font-body">{t.position}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-3 bg-primary-foreground/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
