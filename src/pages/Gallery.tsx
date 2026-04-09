import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, title: "Modern Apartment", category: "Interior", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Office Complex", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Luxury Villa", category: "Exterior", img: "https://images.unsplash.com/photo-1518605336347-48d0697d93a4?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Designer Accent Wall", category: "Texture", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Industrial Warehouse", category: "Industrial", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Living Room Refresh", category: "Interior", img: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Terrace Waterproofing", category: "Waterproofing", img: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Wood Polish Project", category: "Polish", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop" },
];

const categories = ["All", "Interior", "Exterior", "Commercial", "Texture", "Waterproofing", "Polish"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Project Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of our professional work across various residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-brand-orange text-white shadow-lg shadow-orange-500/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedImg(project.img)}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-1">{project.category}</span>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
