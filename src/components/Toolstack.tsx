import { motion } from 'motion/react';
import { Settings2 } from 'lucide-react';

const tools = [
  { name: "Google AI Studio", initial: "G", color: "from-blue-500/80 to-blue-600/20" },
  { name: "Antigravity", initial: "A", color: "from-purple-500/80 to-purple-600/20" },
  { name: "Claude", initial: "C", color: "from-orange-400/80 to-orange-600/20" },
  { name: "ChatGPT", initial: "O", color: "from-emerald-500/80 to-emerald-600/20" },
  { name: "Veo3", initial: "V", color: "from-cyan-400/80 to-cyan-600/20" }
];

export function Toolstack() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black border-b border-white/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 text-left flex flex-col items-start"
        >
          <div className="p-3 bg-[#111] rounded-lg border border-white/10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.03)] inline-block">
             <Settings2 className="w-6 h-6 text-soft-white/60" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-tight">Active Engine Core</h2>
          <p className="text-soft-white/60 font-light max-w-sm">The enterprise-grade intelligence engines powering my workflows and client solutions.</p>
        </motion.div>

        <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-8">
          {tools.map((tool, i) => (
             <motion.div
               key={tool.name}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="group relative flex flex-col items-center gap-4"
             >
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-[#111114] border border-white/10 flex items-center justify-center hover:border-white/30 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                   <span className="font-display font-black text-2xl sm:text-4xl text-white/50 group-hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{tool.initial}</span>
                   
                   {/* Cyber Accents */}
                   <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 m-1" />
                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 m-1" />
                </div>
                <span className="text-xs font-display uppercase tracking-wider text-soft-white/40 group-hover:text-soft-white transition-colors">{tool.name}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
