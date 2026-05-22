import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Digital Chukwudi transformed our patient acquisition. The AI-driven booking system alone increased our lead conversion by 40%.",
    author: "Dr. Sarah Jenkins",
    role: "Founder, Verve Dental"
  },
  {
    quote: "Exceptional digital architecture. The systems built for our logistics scaling handled thousands of global shipments without a hitch.",
    author: "Marcus T.",
    role: "Operations Director, Kroxx Global"
  },
  {
    quote: "They don't just build websites; they build growth engines. The Lash & Brows platform is a masterpiece of luxury and functionality.",
    author: "Elena R.",
    role: "CEO, Lash & Brows"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 sm:px-12 lg:px-24 border-y border-white/5 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 uppercase">Client Testimonial</h2>
          <p className="text-soft-white/60 text-lg max-w-2xl font-light">Direct feedback from partners utilizing the digital systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl bg-black border border-white/10 p-8 hover:border-brand-orange/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] group flex flex-col"
            >
              <Quote className="w-10 h-10 text-brand-orange/20 mb-6 group-hover:text-brand-orange transition-colors" />
              <p className="text-soft-white/80 leading-relaxed font-light mb-8 flex-1">"{test.quote}"</p>
              
              <div className="pt-6 border-t border-white/5">
                <p className="font-bold text-white font-display tracking-wider uppercase text-sm mb-1">{test.author}</p>
                <p className="text-xs font-mono text-soft-white/40 uppercase tracking-widest">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
