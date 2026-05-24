import { motion } from 'motion/react';
import { MonitorSmartphone, LayoutTemplate, MessageSquare, Film, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "AI Website Design & Development",
    description: "Modern conversion-focused websites designed to help businesses attract customers, improve credibility, and generate more leads online.",
    icon: <MonitorSmartphone className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "AI Receptionist Agents",
    description: "AI-powered website assistants that engage visitors, answer questions instantly, capture leads, and help convert traffic into paying customers.",
    icon: <MessageSquare className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "AI Video Creation",
    description: "Cinematic AI-generated videos and visual content designed to help brands capture attention, increase engagement, and stand out online.",
    icon: <Film className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "Paid Ads",
    description: "Google, Facebook, Instagram, and TikTok ad systems built to drive targeted traffic, generate leads, and increase sales.",
    icon: <TrendingUp className="w-10 h-10 text-brand-orange" />
  },
  {
    title: "Sales Funnels & Digital Sales Systems",
    description: "Landing pages, lead funnels, digital products, and course systems designed to turn audience attention into scalable revenue.",
    icon: <LayoutTemplate className="w-10 h-10 text-brand-orange" />
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
          className="mb-16 text-center sm:text-left"
        >
          <h2 className="font-display text-[24px] sm:text-[28px] lg:text-4xl font-bold tracking-tight mb-4 uppercase">Services</h2>
          <p className="text-soft-white/60 text-[15px] sm:text-[17px] lg:text-lg max-w-2xl font-light mx-auto sm:mx-0">Modern digital systems designed to help businesses attract attention, convert visitors, and scale revenue online.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl bg-black border border-white/10 p-8 hover:border-brand-orange/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,90,54,0.1)] group flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] min-h-[300px] sm:min-h-[340px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="font-display text-[20px] sm:text-[22px] lg:text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-base text-soft-white/70 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
