import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-wine-900 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="font-display font-bold text-wine-900 text-lg">C</span>
            </div>
            <span className="font-display font-bold text-xl">Crimson</span>
          </div>
          <p className="text-white/60 text-sm">
            The enterprise-grade automation layer for blockchain networks.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gold-400">Product</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gold-400">Company</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gold-400">Support</h4>
          <ul className="space-y-4 text-sm text-white/70 mb-6">
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-white/40">
        <p>© 2024 Crimson. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}