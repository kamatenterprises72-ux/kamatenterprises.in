import React from 'react';
import { Link } from 'react-router-dom';
import { PaintBucket, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-orange p-2 rounded-lg">
                <PaintBucket className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold leading-none">KAMAT</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-brand-blue">ENTERPRISES</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted paint dealer and professional painting service provider in Dombivli, Kalyan, Ambernath & Badlapur. 
              Transforming spaces with premium quality and budget-friendly solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Berger Paints</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Interior Painting</li>
              <li className="text-gray-400 text-sm">Exterior Painting</li>
              <li className="text-gray-400 text-sm">Waterproofing</li>
              <li className="text-gray-400 text-sm">Texture Finishes</li>
              <li className="text-gray-400 text-sm">Wood Polish</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={20} className="text-brand-orange shrink-0" />
                <span>SHOP NO.3 NEVALI NAKA, OPP. SHIV MANDIR, DOMBIVLI, KALYAN, AMBERNATH & BADLAPUR 421306</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919967616479" className="hover:text-white">+91 9967616479</a>
                  <a href="tel:+919326391310" className="hover:text-white">+91 9326391310</a>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={20} className="text-brand-orange shrink-0" />
                <a href="mailto:contact@kamatenetrprises.in" className="hover:text-white">contact@kamatenetrprises.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Kamat Enterprises. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
