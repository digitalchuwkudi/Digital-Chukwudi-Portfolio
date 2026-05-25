import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolling past ~120vh (approx the end of the Hero + middle of Services)
      // We can use 1000px as a safe heuristic or window.innerHeight * 1.5
      if (window.scrollY > window.innerHeight * 1.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-8 right-6 sm:right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-12 h-12 bg-black border border-brand-orange/50 text-brand-orange hover:bg-brand-orange hover:text-white rounded-full shadow-[0_0_15px_rgba(255,90,54,0.3)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-orange/50 active:scale-95"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </>
  );
}
