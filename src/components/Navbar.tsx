import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/90 backdrop-blur-md border-white/5 py-3' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
        <a href="#" className="flex items-center gap-2 group -my-14 relative z-20 justify-self-start">
          <img src="https://i.ibb.co/Q3m0cmP2/Untitled-5-removebg-preview-1.png" alt="Digital Chukwudi" className="w-[240px] h-[170px] object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 w-full">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-display uppercase tracking-widest font-semibold text-soft-white/60 hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex justify-end">
          <a href="#connect" className="px-5 py-2 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange hover:bg-white hover:text-black hover:border-white shadow-[0_0_10px_rgba(255,90,54,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-xs font-display uppercase tracking-widest font-bold rounded-sm transition-all whitespace-nowrap">
            Access Terminal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden justify-self-end text-white hover:text-brand-orange transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0B0B0D] border-b border-brand-orange/30 flex flex-col items-center py-6 gap-6 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-display uppercase tracking-widest font-bold text-soft-white/80 hover:text-brand-orange"
              >
                {link.name}
              </a>
            ))}
             <a 
               href="#connect" 
               onClick={() => setIsOpen(false)}
               className="mt-2 px-6 py-3 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange hover:bg-white hover:text-black hover:border-white text-xs font-display uppercase tracking-widest font-bold rounded-sm transition-all"
             >
               Access Terminal
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
