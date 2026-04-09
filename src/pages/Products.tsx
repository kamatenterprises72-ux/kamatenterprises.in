import React from 'react';
import { motion } from 'motion/react';
import { Package, CheckCircle2, ShieldCheck, Droplets } from 'lucide-react';

const products = [
  {
    name: "Berger Silk Glamor",
    category: "Interior Luxury",
    desc: "Ultra-premium luxury emulsion that gives your walls a rich, glamorous look with a smooth silk-like finish.",
    features: ["High sheen", "Washable", "Anti-fungal", "Eco-friendly"],
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Berger Weathercoat Long Life",
    category: "Exterior Protection",
    desc: "Advanced exterior emulsion with silicon technology that protects your house from extreme weather conditions.",
    features: ["10-year warranty", "Dust resistance", "Waterproof", "Anti-algae"],
    img: "https://images.unsplash.com/photo-1518605336347-48d0697d93a4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Berger Easy Clean",
    category: "Interior Functional",
    desc: "The most washable paint that allows you to wipe off even the toughest stains easily without damaging the paint.",
    features: ["Stain resistant", "Cross-linking technology", "Rich matte finish", "Low VOC"],
    img: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Berger Home Shield",
    category: "Waterproofing",
    desc: "Comprehensive range of waterproofing products to protect your home from dampness and leakages.",
    features: ["Damp block", "Crack fill", "Sealant", "Roof protection"],
    img: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Berger_Paints_Logo.svg/1200px-Berger_Paints_Logo.svg.png" 
              alt="Berger Paints Logo" 
              className="h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Premium Paint Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            As authorized dealers of Berger Paints, we offer a complete range of high-performance products for every surface.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-8 w-full md:w-3/5 space-y-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="space-y-2 pt-2">
                    {product.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-blue" />
                        <span className="text-xs font-medium text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="tel:+919967616479" className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Check Availability <Package size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-brand-orange w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">100% Genuine</h4>
              <p className="text-gray-400 text-sm">We only sell authentic Berger products directly from the company.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Droplets className="text-brand-orange w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Expert Mixing</h4>
              <p className="text-gray-400 text-sm">State-of-the-art computerized color mixing for thousands of shades.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="text-brand-orange w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Wholesale Rates</h4>
              <p className="text-gray-400 text-sm">Competitive pricing for bulk orders and regular contractors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
