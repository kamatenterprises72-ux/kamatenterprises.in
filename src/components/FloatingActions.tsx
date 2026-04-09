import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919967616479"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919967616479"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-brand-blue text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors md:hidden"
        title="Call Us"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
