import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <div className="pt-24" /> {/* Space for overlapping service cards */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Index;
