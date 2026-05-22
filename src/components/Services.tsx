import { motion } from 'motion/react';
import { MonitorSmartphone, Edit3, TrendingUp, Presentation } from 'lucide-react';

const services = [
  {
    title: "AI Website Design/ Development",
    description: "Intelligent, high-converting digital storefronts built with modern architectures and responsive design systems.",
    icon: <MonitorSmartphone className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "AI Content Creation",
    description: "Generative AI strategies applied to produce compelling, on-brand copy, media, and engaging visual assets at scale.",
    icon: <Edit3 className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "Paid Ads (Facebook, Instagram, Google, TikTok)",
    description: "Data-driven advertising campaigns precisely targeted to maximize ROI and rapidly scale your revenue pipelines.",
    icon: <TrendingUp className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "Digital Sales/ Course Creation",
    description: "End-to-end setups for digital product funnels and course platforms optimized for seamless user acquisition and learning.",
    icon: <Presentation className="w-8 h-8 text-brand-orange" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0B0B0D] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 uppercase">Services</h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto font-light">Comprehensive digital architecture services engineered to build, scale, and automate your revenue streams.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl bg-black border border-white/10 p-8 hover:border-brand-orange/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,90,54,0.1)] group flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-6 w-16 h-16 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-soft-white/70 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
