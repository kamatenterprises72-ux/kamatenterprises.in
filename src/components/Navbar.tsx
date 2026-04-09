import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PaintBucket, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-orange p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <PaintBucket className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-display font-bold leading-none",
                !scrolled && location.pathname === '/' ? "text-white" : "text-brand-dark"
              )}>
                KAMAT
              </span>
              <span className={cn(
                "text-[10px] tracking-[0.2em] font-medium",
                !scrolled && location.pathname === '/' ? "text-white/80" : "text-brand-blue"
              )}>
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-orange',
                  !scrolled && location.pathname === '/' 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-brand-dark/80',
                  location.pathname === link.href && (scrolled || location.pathname !== '/' ? 'text-brand-orange' : 'text-white font-bold underline underline-offset-4')
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919967616479"
              className="bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                !scrolled && location.pathname === '/' ? "text-white" : "text-brand-dark"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'block px-3 py-3 text-base font-medium rounded-md',
                location.pathname === link.href
                  ? 'bg-orange-50 text-brand-orange'
                  : 'text-brand-dark hover:bg-gray-50'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="tel:+919967616479"
              className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white py-3 rounded-lg font-bold"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
