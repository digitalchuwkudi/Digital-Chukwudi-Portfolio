/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowIHelp } from './components/HowIHelp';
import { SelectedWork } from './components/SelectedWork';
import { Toolstack } from './components/Toolstack';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="bg-charcoal text-soft-white min-h-screen selection:bg-brand-orange selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowIHelp />
        <SelectedWork />
        <Testimonials />
        <Toolstack />
        <About />
      </main>
      
      <ScrollToTop />
      
      <footer className="w-full text-center text-xs font-display py-8 bg-[#050505] text-soft-white/30 uppercase tracking-widest border-t border-white/5 relative z-10">
        &copy; 2026 Digital Chukwudi. All Rights Reserved.
      </footer>
    </div>
  );
}
