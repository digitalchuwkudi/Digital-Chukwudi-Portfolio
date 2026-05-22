import { motion } from 'motion/react';
import { Play, Youtube, Activity } from 'lucide-react';

export function ContentHub() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#08080A] relative border-b border-white/5">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDB2NDBIMFYweiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
               <Activity className="w-8 h-8 text-brand-orange animate-pulse" />
               <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight uppercase">AI Content Hub</h2>
            </div>
            <p className="text-soft-white/60 text-lg max-w-2xl font-light">Deep dives into AI strategy, automations, and building systems that scale businesses.</p>
          </div>
          <a 
            href="https://www.youtube.com/@CHUCKCATtales" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-white/10 bg-black hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 px-6 py-3 rounded-lg transition-all"
          >
            <Youtube className="w-5 h-5 text-soft-white/60 group-hover:text-[#FF0000] transition-colors" />
            <span className="font-display text-sm font-bold tracking-widest uppercase">Subscribe Channel</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group rounded-xl overflow-hidden aspect-video max-w-4xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-black mix-blend-overlay z-10 block group-hover:opacity-60 transition-opacity" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
           
           <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/60 group-hover:bg-black/40 transition-colors duration-500 backdrop-blur-[2px]">
              <a 
                href="https://www.youtube.com/watch?v=NW9a-Z8w4vs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-brand-orange border-4 border-black text-black flex items-center justify-center pl-1 hover:scale-110 shadow-[0_0_40px_rgba(255,90,54,0.5)] transition-all duration-300 relative"
              >
                 <Play className="w-8 h-8 fill-current" />
              </a>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-8 mb-2 uppercase tracking-wider">Kroxx Global AI Ad</h3>
              <p className="text-soft-white/80 max-w-lg font-light text-sm tracking-wide">Watch how we leveraged generative AI to produce a high-converting commercial ad at scale.</p>
           </div>
           
           {/* Cyber Corner Accents */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-orange/60 z-30 m-4 rounded-tl-sm pointer-events-none" />
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-orange/60 z-30 m-4 rounded-br-sm pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
