import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
        <a href="#" className="flex-1 flex items-center gap-2 group -my-14 -ml-4 md:-ml-10 xl:-ml-14 relative z-20 justify-start">
          <img src="https://i.ibb.co/Q3m0cmP2/Untitled-5-removebg-preview-1.png" alt="Digital Chukwudi" className="w-[240px] h-[170px] object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-none items-center justify-center gap-8 w-auto">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-display uppercase tracking-widest font-semibold text-soft-white/60 hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex flex-1 justify-end">
          <a href="#connect" className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange/10 hover:bg-white text-brand-orange hover:text-black hover:border-white border border-brand-orange/30 shadow-[0_0_10px_rgba(255,90,54,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-xs sm:text-sm font-display uppercase tracking-widest font-bold rounded-xl transition-all whitespace-nowrap">
            <ArrowRight className="w-4 h-4" />
            Contact
          </a>
        </div>

        {/* Mobile/Tablet Toggle */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button className="text-white hover:text-brand-orange transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      
        {isOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-[#0B0B0D] border-b border-brand-orange/30 flex flex-col items-center py-6 gap-6 lg:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
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
               className="mt-2 flex items-center justify-center gap-4 w-[95%] max-w-[340px] sm:max-w-[400px] h-[56px] px-4 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange hover:bg-white hover:text-black hover:border-white rounded-xl transition-all mx-auto"
             >
               <span className="font-display uppercase tracking-widest text-xs sm:text-sm font-bold transition-colors truncate">Contact</span>
             </a>
          </div>
        )}
      
    </header>
  );
}
