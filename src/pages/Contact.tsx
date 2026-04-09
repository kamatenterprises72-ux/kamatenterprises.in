import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Have a project in mind? Get in touch with us for a free estimate or expert advice.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-orange w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Our Location</h4>
                      <p className="text-gray-600 leading-relaxed">
                        SHOP NO.3 NEVALI NAKA, OPP. SHIV MANDIR,<br />
                        NEAR MHADA COLONY, AMBERNATH 421306
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-brand-blue w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Call Us</h4>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+919967616479" className="text-gray-600 hover:text-brand-orange transition-colors">+91 9967616479</a>
                        <a href="tel:+919326391310" className="text-gray-600 hover:text-brand-orange transition-colors">+91 9326391310</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand-orange w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Email Us</h4>
                      <a href="mailto:kamat.enterprises72@gmail.com" className="text-gray-600 hover:text-brand-orange transition-colors">
                        kamat.enterprises72@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="bg-brand-dark rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#25D366] p-3 rounded-xl">
                    <MessageCircle fill="white" className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">WhatsApp Support</h3>
                </div>
                <p className="text-gray-400 mb-6">Need a quick answer? Chat with our experts on WhatsApp for instant support.</p>
                <a 
                  href="https://wa.me/919967616479" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600 w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Requirement</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-500/20 outline-none transition-all">
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Waterproofing</option>
                      <option>Texture Finishes</option>
                      <option>Wood Polish</option>
                      <option>Paint Supply</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.914371424169!2d73.188448!3d19.155257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79564619d0831%3A0x6d9a4073e570956!2sNevali%20Naka%2C%20Ambernath%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1712384000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Kamat Enterprises Location"
        ></iframe>
      </section>
    </div>
  );
}
