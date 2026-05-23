import { motion } from 'motion/react';
import { Magnet, Users, RefreshCcw } from 'lucide-react';

const steps = [
  {
    title: "Attract",
    description: "AI videos, paid ads, and modern websites designed to help brands stand out and capture attention online.",
    icon: <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center border border-white/5 shadow-inner mb-6 mx-auto"><Magnet className="w-10 h-10 text-brand-orange" /></div>
  },
  {
    title: "Engage",
    description: "AI chat agents and intelligent user experiences that keep visitors engaged, informed, and connected to your business.",
    icon: <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center border border-white/5 shadow-inner mb-6 mx-auto"><Users className="w-10 h-10 text-brand-orange" /></div>
  },
  {
    title: "Convert",
    description: "Funnels, booking systems, and automated digital workflows designed to turn visitors into paying customers.",
    icon: <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center border border-white/5 shadow-inner mb-6 mx-auto"><RefreshCcw className="w-10 h-10 text-brand-orange" /></div>
  }
];

export function HowIHelp() {
  return (
    <section id="how-i-help" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 uppercase">How I Help Businesses Grow</h2>
          <p className="text-soft-white/60 text-lg max-w-2xl font-light">Every system is built around one goal — helping businesses attract attention, engage visitors, and convert more customers online.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl bg-[#111114] border border-white/10 p-10 hover:border-brand-orange/40 transition-all duration-500 hover:-translate-y-2 group text-center flex flex-col items-center"
            >
              {step.icon}
              <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-soft-white/70 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
