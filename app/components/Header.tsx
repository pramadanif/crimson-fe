'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
        <div className="flex items-center gap-3">
          <Image
            src={isScrolled ? "/crimson_red.png" : "/crimson-logo.png"}
            alt="Crimson Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-wine-900' : 'text-white'}`}>
            Crimson
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Why Crimson', 'Demo', 'Contact'].map((item) => (
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
        <div className="hidden md:flex items-center">
          <button className={`px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 ${isScrolled
            ? 'bg-wine-900 text-gold-400'
            : 'bg-gold-400 text-wine-900'
            }`}>
            Launch Crimson
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
              {['Home', 'Features', 'Why Crimson', 'Demo', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-gray-800 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full py-3 mt-4 text-center rounded-lg bg-wine-900 text-gold-400 font-bold">
                Launch Crimson
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}