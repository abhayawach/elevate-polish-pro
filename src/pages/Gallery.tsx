import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-z7nyd9gnw4.jpg", title: "Warehouse Security Team", category: "Industrial" },
  { src: "https://content.jdmagicbox.com/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-atm-i10o9gsen1.jpg", title: "ATM Security", category: "Banking" },
  { src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-i0pe5n6n3c.jpg", title: "Corporate Security", category: "Commercial" },
  { src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-4cq9fl95bv.jpg", title: "Event Security", category: "Events" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop", title: "Office Protection", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop", title: "Residential Guard", category: "Residential" },
];

const categories = ["All", ...new Set(images.map(i => i.category))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter(i => i.category === filter);

  return (
    <>
      <section className="relative py-20 md:py-28 gradient-navy overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <span className="section-tag">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>
            Our <span className="text-gradient-gold">Work</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all ${filter === c ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div key={img.src} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setSelected(img.src)}>
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-bold font-display" style={{ color: "hsl(var(--primary-foreground))" }}>{img.title}</h3>
                    <p className="text-xs text-gold font-body">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-6 right-6 p-2 rounded-full bg-card/20" onClick={() => setSelected(null)}>
              <X className="w-6 h-6" style={{ color: "hsl(var(--primary-foreground))" }} />
            </button>
            <img src={selected} alt="" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
