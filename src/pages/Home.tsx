import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
            alt="Professional Painting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
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
                Ambernath's Trusted Paint Experts
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display font-bold leading-[1.1] mb-6">
                Premium Painting Services at <span className="text-brand-orange">Budget Price</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Transform your home and space with expert painting solutions. 
                We bring colors to life with premium finishes and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 group"
                >
                  Get Free Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:+919967616479" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm">Quality Finish</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Berger</p>
                <p className="text-gray-400 text-sm">Authorized Dealer</p>
              </div>
            </motion.div>
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Services</h2>
              <p className="text-gray-600">From residential homes to industrial complexes, we provide comprehensive painting solutions tailored to your needs.</p>
            </div>
            <Link to="/services" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Interior Painting", img: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=1000&auto=format&fit=crop" },
              { title: "Exterior Painting", img: "https://images.unsplash.com/photo-1518605336347-48d0697d93a4?q=80&w=1000&auto=format&fit=crop" },
              { title: "Waterproofing", img: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop" },
            ].map((service, i) => (
              <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <Link to="/services" className="text-brand-orange text-sm font-bold flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Results, Real Quality</h2>
            <p className="text-gray-400">See the transformation we bring to every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Before</div>
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-brand-orange">
                <div className="absolute top-4 left-4 z-10 bg-brand-orange px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">After</div>
                <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Residential Transformation</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                This project involved a complete interior overhaul for a 3BHK apartment in Ambernath. 
                We used premium Berger Silk finishes to give the walls a luxurious sheen while ensuring 
                durability and easy maintenance.
              </p>
              <ul className="space-y-4">
                {[
                  "Surface preparation & crack filling",
                  "Double coat primer application",
                  "Premium Berger Silk finish",
                  "Designer accent wall implementation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/gallery" className="bg-white text-brand-dark px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  View More Projects
                </Link>
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
