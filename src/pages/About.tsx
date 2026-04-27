import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Kamat Enterprises</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted partner for high-quality painting solutions and premium paint products in Dombivli, Kalyan, Ambernath & Badlapur.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kamat Enterprises was founded with a simple mission: to provide the people of Dombivli, Kalyan, Ambernath & Badlapur and surrounding areas with painting services that combine professional quality with honest, budget-friendly pricing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As an authorized dealer of Berger Paints, we don't just provide labor; we provide the best materials in the industry. Over the years, we have grown from a small local shop to a comprehensive painting solutions provider for residential, commercial, and industrial clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="text-brand-orange" />, title: "Quality Focus", desc: "We never compromise on the finish." },
                  { icon: <Users className="text-brand-orange" />, title: "Customer First", desc: "Your satisfaction is our priority." },
                  { icon: <Clock className="text-brand-orange" />, title: "Timely Delivery", desc: "We respect your schedules." },
                  { icon: <CheckCircle2 className="text-brand-orange" />, title: "Trusted Materials", desc: "Only genuine Berger products." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-brand-orange">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To transform living and working spaces through colors and textures that reflect our clients' personalities, while maintaining the highest standards of durability and affordability.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-brand-orange">Our Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To be the most preferred painting service provider in Maharashtra, known for our innovation in finishes, commitment to quality, and excellence in customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
