'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-wine-900' : 'bg-white'}`}>
            <span className={`font-display font-bold text-lg ${isScrolled ? 'text-gold-400' : 'text-wine-900'}`}>C</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-wine-900' : 'text-white'}`}>
            Crimson
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'How it Works', 'Ecosystem', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className={`text-sm font-medium transition-colors hover:text-gold-400 ${isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`px-5 py-2.5 text-sm font-semibold rounded-full border transition-all ${isScrolled
            ? 'border-wine-900 text-wine-900 hover:bg-wine-50'
            : 'border-gold-400 text-gold-400 hover:bg-gold-400/10'
            }`}>
            Sign In
          </button>
          <button className={`px-5 py-2.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 ${isScrolled
            ? 'bg-wine-900 text-gold-400'
            : 'bg-gold-400 text-wine-900'
            }`}>
            Launch App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-wine-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-wine-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden border-t border-gray-100"
          >
            <nav className="flex flex-col gap-4">
              {['Features', 'How it Works', 'Ecosystem', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-800 font-medium py-2 border-b border-gray-100"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button className="w-full py-3 text-center rounded-lg border border-wine-900 text-wine-900 font-bold">
                  Sign In
                </button>
                <button className="w-full py-3 text-center rounded-lg bg-wine-900 text-gold-400 font-bold">
                  Launch App
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}