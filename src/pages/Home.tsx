import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1560930950-8cc38cd00657?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.img 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  src={slide} 
                  alt="Professional Painting" 
                  className="absolute w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )
            ))}
          </AnimatePresence>
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Kalyan's Premium Paint Experts
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display font-bold leading-[1.1] mb-6">
                Premium Painting Services at <span className="text-brand-orange">Budget Price</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Trusted Paint Dealer & Expert Painting Solutions for Homes, Shops & Industrial Spaces in Dombivli, Kalyan, Ambernath & Badlapur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 group"
                >
                  Get Free Quote
                </Link>
                <a 
                  href="tel:+919967616479" 
                  className="bg-white text-brand-dark px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authorized Dealer Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-8">Authorized Dealer Of</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <img src="public/images/logo1.JPG" alt="Berger" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Asian_Paints_Logo.svg/1200px-Asian_Paints_Logo.svg.png" alt="Asian Paints" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="https://www.dulux.in/content/dam/akzonobel-dulux/master/en/logos/logo-dulux-desktop.png" alt="Dulux" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="https://www.drfixit.co.in/sites/default/files/dr-fixit-logo.png" alt="Dr. Fixit" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Kamat Enterprises?</h2>
            <p className="text-gray-600">We combine years of experience with high-quality materials to deliver results that exceed expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-orange" />,
                title: "Budget Friendly",
                desc: "Premium quality doesn't have to break the bank. We offer competitive pricing for all our services."
              },
              {
                icon: <Star className="w-8 h-8 text-brand-orange" />,
                title: "Premium Finish",
                desc: "Our expert painters ensure a flawless, smooth, and long-lasting finish for every wall."
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-orange" />,
                title: "Fast & Reliable",
                desc: "We value your time. Our team works efficiently to complete projects on schedule without compromising quality."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
              <p className="text-gray-600">Premium expertise for homes, shops, and industries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Interior Painting", desc: "Premium emulsions (Berger, Asian, Dulux).", img: "/images/image1.jpeg" },
              { title: "Exterior Painting", desc: "Weather-proof coatings for longevity.", img: "/images/image2.png" },
              { title: "Waterproofing", desc: "Dr. Fixit seepage solutions.", img: "/images/image3.png" },
            ].map((service, i) => (
              <div key={i} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-2">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="text-white text-sm font-bold flex items-center gap-1 hover:underline">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Before & After Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Results, Real Quality</h2>
            <p className="text-gray-600">See how professional paint selection and expert application transforms your space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0"></div>
              <div className="relative grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Before</div>
                      <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-brand-orange">
                      <div className="absolute top-2 left-2 z-10 bg-brand-orange px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">After</div>
                      <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
              </div>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold">Premium Transformation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just paint walls; we craft ambience. Our premium selection of Asian Paints Royale and Berger Silk emulsions ensures a luxurious, washable, and durable finish that completely redefined this residential living space.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {["Premium Finish", "100% Washable", "Odorless Paints", "Anti-Fungal"].map(feature => (
                        <div key={feature} className="flex items-center gap-2 font-bold text-sm text-brand-dark">
                            <CheckCircle2 size={18} className="text-brand-orange" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="orange-gradient rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to give your walls a new life?</h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Get a free estimate today and experience the professional touch of Kamat Enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-brand-orange px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                  Get Free Estimate
                </Link>
                <a href="tel:+919967616479" className="bg-brand-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all">
                  Call Us Now
                </a>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
