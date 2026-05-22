import { motion } from 'motion/react';
import { Mail, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="connect">
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
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-orange p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
                 <img 
                    src="https://i.ibb.co/tTBnfdPn/add-a-grayscale-black-grey-202605220221.jpg" 
                    alt="Digital Chukwudi" 
                    className="w-full h-full object-cover grayscale brightness-110"
                  />
              </div>
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-[10px] font-display uppercase tracking-widest rounded-sm mb-2 shadow-[0_0_10px_rgba(255,90,54,0.2)]">Growth Architect</div>
              <h3 className="font-display text-2xl font-bold">Digital Chukwudi</h3>
            </div>
          </div>
          
          <div className="space-y-4 text-soft-white/70 text-base leading-relaxed mb-8 relative z-10 font-light file:">
            <p>
              I bridge the gap between cutting-edge AI technologies and high-converting frontend experiences.
            </p>
            <p>
              For businesses to thrive today, they don't just need a website—they need a <span className="text-white font-medium border-b border-brand-orange/50">digital system</span>. From intelligent booking flows and automated CRM pipelines to generative AI content, I build infrastructure that scales revenue.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5 relative z-10">
            <div>
              <div className="text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">10+</div>
              <div className="text-xs uppercase tracking-wider font-display text-soft-white/40">Entities Built</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">100%</div>
              <div className="text-xs uppercase tracking-wider font-display text-soft-white/40">Performance Focus</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#ff5a36]" />
            <span className="text-xs font-display tracking-widest text-brand-orange uppercase">Link Established</span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-6">Initiate Contact Sequence.</h2>
          <p className="text-soft-white/60 mb-10 text-lg">Integrate a revenue-focused digital framework into your current operations.</p>
          
          <div className="flex flex-col w-full gap-4">
             <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-between w-full px-6 py-4 bg-[#111114] border border-white/10 hover:border-brand-orange hover:bg-brand-orange/5 rounded-xl transition-all group"
            >
              <div className="flex items-center gap-4">
                 <Mail className="w-5 h-5 text-soft-white/50 group-hover:text-brand-orange transition-colors" />
                 <span className="font-display uppercase tracking-widest text-sm font-bold group-hover:text-white transition-colors">Direct Comm_Line</span>
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
                 <span className="font-display uppercase tracking-widest text-sm font-bold text-white">Schedule Uplink (Cal.com)</span>
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
                 <span className="font-display uppercase tracking-widest text-sm font-bold group-hover:text-white transition-colors">WhatsApp Network</span>
              </div>
              <ExternalLink className="w-4 h-4 text-soft-white/30 group-hover:text-[#25D366] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
