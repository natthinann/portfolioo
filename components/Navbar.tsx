"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', color: 'text-pink-500', bg: 'bg-pink-500/10', shadow: 'shadow-pink-500/20' },
    { name: 'Skills', href: '#skills', color: 'text-cyan-400', bg: 'bg-cyan-400/10', shadow: 'shadow-cyan-400/20' },
    { name: 'Projects', href: '#projects', color: 'text-violet-500', bg: 'bg-violet-500/10', shadow: 'shadow-violet-500/20' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-100 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`relative flex items-center justify-center px-4 py-2 transition-all duration-700
          ${scrolled 
            ? 'bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-full' 
            : 'bg-transparent border border-transparent'
          }`}>
          <div className="absolute left-6 group">
            <a href="#" className="flex items-center gap-2 active:scale-95 transition-transform">
              <div className="w-2 h-2 rounded-full bg-pink-500 group-hover:bg-cyan-400 transition-colors" />
              <span className="text-sm font-black tracking-tighter text-white">PORTFOLIO.</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative px-6 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 rounded-full
                    ${isActive ? link.color : 'text-slate-400 hover:text-white'}
                  `}>
                  <span className="relative z-10">{link.name}</span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="active-pill"
                      className={`absolute inset-0 ${link.bg} ${link.shadow} shadow-lg rounded-full border border-white/10`}
                      transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}/>
                  )}
                </a>
              );
            })}
          </div>

          <div className="absolute right-4">
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="w-5 flex flex-col gap-1.5 items-end">
                <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-3'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-4'}`} />
              </div>
            </button>
            
            <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">Available</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-8 bg-slate-950/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:hidden shadow-3xl">
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-black uppercase tracking-tighter transition-colors ${activeSection === link.href.substring(1) ? link.color : 'text-slate-600'}`}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;