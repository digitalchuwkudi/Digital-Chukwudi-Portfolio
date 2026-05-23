import { motion } from 'motion/react';
import { Mail, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="about">
       <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
       
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 p-10 rounded-2xl bg-black border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-orange p-1 group/image">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111] transition-transform duration-500 group-hover/image:scale-110">
                 <img 
                    src="https://i.ibb.co/tTBnfdPn/add-a-grayscale-black-grey-202605220221.jpg" 
                    alt="Digital Chukwudi" 
                    className="w-full h-full object-cover grayscale brightness-110 transition-transform duration-700 group-hover/image:scale-125"
                  />
              </div>
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-[10px] font-display uppercase tracking-widest rounded-sm mb-2 shadow-[0_0_10px_rgba(255,90,54,0.2)]">AI Growth Systems Designer</div>
              <h3 className="font-display text-2xl font-bold">Digital Chukwudi</h3>
            </div>
          </div>
          
          <div className="space-y-4 text-soft-white/70 text-base leading-relaxed mb-8 relative z-10 font-light">
            <p>
              I help businesses grow through AI-powered websites, intelligent automation, AI chat agents, cinematic AI content, digital sales systems and all round modern content experiences.
            </p>
            <p>
              Today, businesses need more than just a good-looking website — they need systems that attract attention, engage visitors, and convert traffic into paying customers.
            </p>
            <p>
              From high-converting websites and AI-powered chat experiences to paid ads and digital funnels, I build digital growth systems designed for modern businesses that want to scale online.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 relative z-10">
            <div>
              <div className="text-xl sm:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">15+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-display text-soft-white/40">Projects Built</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">Multi-Industry</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-display text-soft-white/40">Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">Built For</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-display text-soft-white/40">Conversions</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          id="connect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-center text-center scroll-mt-24"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#ff5a36]" />
            <span className="text-xs font-display tracking-widest text-brand-orange uppercase">Link Established</span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Let’s Build a Digital System That Grows Your Business.</h2>
          <p className="text-soft-white/70 leading-relaxed font-light mb-10 max-w-md">Whether you need a high-converting website, AI chat agent, paid ads, AI video content, or a complete digital sales system — I can help you build a smarter online presence.</p>
          
          <div className="flex flex-col w-full gap-4">
             <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-between w-full px-6 py-4 bg-[#111114] border border-white/10 hover:border-brand-orange hover:bg-brand-orange/5 rounded-xl transition-all group"
            >
              <div className="flex items-center gap-4">
                 <Mail className="w-5 h-5 text-soft-white/50 group-hover:text-brand-orange transition-colors" />
                 <span className="font-display uppercase tracking-widest text-sm font-bold group-hover:text-white transition-colors">Direct Email_Line</span>
              </div>
              <ExternalLink className="w-4 h-4 text-soft-white/30 group-hover:text-brand-orange transition-colors" />
            </a>
            
            <a 
              href="https://cal.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange/90 shadow-[0_0_20px_rgba(255,90,54,0.2)] hover:shadow-[0_0_30px_rgba(255,90,54,0.4)] rounded-xl transition-all group"
            >
              <div className="flex items-center gap-4">
                 <Calendar className="w-5 h-5 text-white" />
                 <span className="font-display uppercase tracking-widest text-sm font-bold text-white">Schedule a Call (Cal.com)</span>
              </div>
              <ExternalLink className="w-4 h-4 text-white/50" />
            </a>

            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-[#111114] border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/5 rounded-xl transition-all group"
            >
              <div className="flex items-center gap-4">
                 <MessageCircle className="w-5 h-5 text-soft-white/50 group-hover:text-[#25D366] transition-colors" />
                 <span className="font-display uppercase tracking-widest text-sm font-bold group-hover:text-white transition-colors">WhatsApp Line</span>
              </div>
              <ExternalLink className="w-4 h-4 text-soft-white/30 group-hover:text-[#25D366] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
