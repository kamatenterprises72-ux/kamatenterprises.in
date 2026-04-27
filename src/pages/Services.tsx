import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Droplets, Palette, Sparkles, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Interior Painting",
    desc: "Give your rooms a fresh, vibrant look with our premium interior painting. We handle everything from wall preparation to the final coat.",
    benefits: ["Smooth finish", "Odorless paints", "Color consultation", "Furniture protection"],
    // NOTE: Replace with image 1 (Interior Painting - Berger Silk, Dulux, Asian Paints)
    img: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Exterior Painting",
    desc: "Protect and beautify your building's exterior. Our weather-resistant coatings ensure your property looks great for years.",
    benefits: ["Weather protection", "Anti-algae coating", "High durability", "Crack bridging"],
    // NOTE: Replace with image 2 (Exterior Painting - Berger Weathercoat, Dulux Weathershield, Asian Paints Ultima)
    img: "https://images.unsplash.com/photo-1518605336347-48d0697d93a4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: "Waterproofing Solutions",
    desc: "Say goodbye to damp walls and leakages. Our advanced waterproofing treatments protect your structure from water damage.",
    benefits: ["Terrace waterproofing", "Wall dampness treatment", "Basement sealing", "Long-term warranty"],
    // NOTE: Replace with image 3 (Waterproofing - Dr Fixit Crack-X, PIDIPROOF, Raincoat)
    img: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Texture & Designer Finishes",
    desc: "Add character to your walls with designer textures. From metallic finishes to rustic patterns, we create stunning accent walls.",
    benefits: ["Custom patterns", "Metallic finishes", "Unique textures", "Expert application"],
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Wood Polish & Coating",
    desc: "Restore the natural beauty of your wooden furniture and fixtures with our professional polishing and coating services.",
    benefits: ["PU Polish", "Melamyne finish", "Teak wood polish", "Scratch resistance"],
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Paint Supply",
    desc: "As authorized Berger Paint dealers, we supply a wide range of genuine paint products for all your DIY or contractor needs.",
    benefits: ["Genuine products", "Wholesale rates", "Color mixing", "Expert advice"],
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Expert Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Comprehensive painting and protection solutions for every surface.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 0 ? "flex flex-col lg:flex-row gap-12 items-center" : "flex flex-col lg:flex-row-reverse gap-12 items-center"}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-brand-orange shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-display font-bold">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link to="/contact" className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                      Get Quote for {service.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
