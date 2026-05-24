import { motion } from 'motion/react';
import { Magnet, Users, RefreshCcw } from 'lucide-react';

const steps = [
  {
    title: "Attract",
    description: "AI videos, paid ads, and modern websites designed to help brands stand out and capture attention online.",
    icon: <Magnet className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "Engage",
    description: "AI receptionist agents and intelligent user experiences that keep visitors engaged, informed, and connected to your business.",
    icon: <Users className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "Convert",
    description: "Funnels, booking systems, and automated digital workflows designed to turn visitors into paying customers.",
    icon: <RefreshCcw className="w-10 h-10 text-brand-orange" />
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
          className="mb-16 text-center sm:text-left"
        >
          <h2 className="font-display text-[24px] sm:text-[28px] lg:text-4xl font-bold tracking-tight mb-4 uppercase">How I Help Businesses Grow</h2>
          <p className="text-soft-white/60 text-[15px] sm:text-[17px] lg:text-lg max-w-2xl font-light mx-auto sm:mx-0">Every system is built around one goal — helping businesses attract attention, engage visitors, and convert more customers online.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl bg-black border border-white/10 p-8 sm:p-10 hover:border-brand-orange/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,90,54,0.1)] group text-center flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="font-display text-[20px] sm:text-[22px] lg:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-base text-soft-white/70 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
