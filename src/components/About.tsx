import { motion } from 'motion/react';
import { Mail, MessageCircle, Calendar, ExternalLink, Twitter, Instagram, Facebook, Linkedin, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (showCalendar) {
      (function (C: any, A: any, L: any) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            let scr = d.createElement("script");
            scr.src = A;
            d.head.appendChild(scr);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });

      (window as any).Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
        calLink: "digitalchukwudi/30min",
      });

      (window as any).Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, [showCalendar]);

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="about">
      {showCalendar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,90,54,0.2)]">
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-30min"></div>
          </div>
        </div>
      )}
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
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 relative z-10 w-full">
            <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-brand-orange p-1 group/image mx-auto sm:mx-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111] transition-transform duration-500 group-hover/image:scale-110">
                 <img 
                    src="https://i.ibb.co/tTBnfdPn/add-a-grayscale-black-grey-202605220221.jpg" 
                    alt="Digital Chukwudi" 
                    className="w-full h-full object-cover grayscale brightness-110 transition-transform duration-700 group-hover/image:scale-125"
                  />
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
              <div className="inline-block px-2 py-0.5 bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-[10px] sm:text-[11px] font-display uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(255,90,54,0.2)]">AI Growth Systems Designer</div>
              <h3 className="font-display text-[20px] sm:text-[22px] lg:text-2xl font-bold">Digital Chukwudi</h3>
            </div>
          </div>
          
          <div className="space-y-4 text-soft-white/70 text-[14px] sm:text-[15px] lg:text-base leading-relaxed mb-8 relative z-10 font-light">
            <p>
              I help businesses grow through AI-powered websites, intelligent automation, AI receptionist agents, cinematic AI content, digital sales systems and all round modern content experiences.
            </p>
            <p>
              Today, businesses need more than just a good-looking website — they need systems that attract attention, engage visitors, and convert traffic into paying customers.
            </p>
            <p>
              From high-converting websites and AI-powered receptionist experiences to paid ads and digital funnels, I build digital growth systems designed for modern businesses that want to scale online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between w-full gap-6 pt-8 border-t border-white/5 relative z-10 text-center sm:px-4 lg:px-8">
            <div className="flex flex-col items-center">
              <div className="text-[18px] sm:text-[22px] lg:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">15+</div>
              <div className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-wider font-display text-soft-white/40">Projects Built</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] sm:text-[22px] lg:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">Multi-Industry</div>
              <div className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-wider font-display text-soft-white/40">Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] sm:text-[22px] lg:text-2xl font-display font-bold text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,54,0.3)] mb-1">Built For</div>
              <div className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-wider font-display text-soft-white/40">Conversions</div>
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
            <span className="text-[10px] sm:text-[11px] lg:text-xs font-display tracking-widest text-brand-orange uppercase">Link Established</span>
          </div>

          <h2 className="font-display text-[24px] md:text-[28px] lg:text-4xl font-bold tracking-tight mb-6">Let’s Build a Digital System That Grows Your Business.</h2>
          <p className="text-soft-white/70 text-[15px] sm:text-[17px] lg:text-lg leading-relaxed font-light mb-10 max-w-md">Whether you need a high-converting website, AI receptionist agent, paid ads, AI video content, or a complete digital sales system — I can help you build a smarter online presence.</p>
          
          <div className="flex flex-col items-center w-full gap-4">
            <a 
              href="mailto:digitalchukwudi@gmail.com" 
              className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-[320px] sm:w-[400px] h-[56px] px-4 bg-[#111114] border border-white/10 hover:border-brand-orange hover:bg-brand-orange/5 rounded-xl transition-all group"
            >
               <Mail className="w-5 h-5 shrink-0 text-soft-white/50 group-hover:text-brand-orange transition-colors" />
               <span className="font-display uppercase tracking-widest text-[11px] sm:text-sm font-bold group-hover:text-white transition-colors truncate">digitalchukwudi@gmail.com</span>
            </a>
            
            <button 
              onClick={() => setShowCalendar(true)}
              className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-[320px] sm:w-[400px] h-[56px] px-4 bg-brand-orange hover:bg-brand-orange/90 shadow-[0_0_20px_rgba(255,90,54,0.2)] hover:shadow-[0_0_30px_rgba(255,90,54,0.4)] rounded-xl transition-all group"
            >
               <Calendar className="w-5 h-5 shrink-0 text-white" />
               <span className="font-display uppercase tracking-widest text-[11px] sm:text-sm font-bold text-white truncate">Schedule a Call</span>
            </button>

            <a 
              href="https://wa.me/2290192206612" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-[320px] sm:w-[400px] h-[56px] px-4 bg-[#111114] border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/5 rounded-xl transition-all group"
            >
               <MessageCircle className="w-5 h-5 shrink-0 text-soft-white/50 group-hover:text-[#25D366] transition-colors" />
               <span className="font-display uppercase tracking-widest text-[11px] sm:text-sm font-bold group-hover:text-white transition-colors truncate">WhatsApp Line</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-5 sm:gap-6 mt-4 w-full">
              <a href="https://x.com/digitalCHUKWUDI" target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-[#1DA1F2]/20 hover:border-[#1DA1F2] rounded-full transition-all group hover:bg-[#1DA1F2]/5 hover:shadow-[0_0_15px_rgba(29,161,242,0.2)] shadow-[0_0_10px_rgba(29,161,242,0.1)]" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/digital-chukwudi-46a329388/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-[#0A66C2]/20 hover:border-[#0A66C2] rounded-full transition-all group hover:bg-[#0A66C2]/5 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] shadow-[0_0_10px_rgba(10,102,194,0.1)]" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/digitalchukwudi_/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-[#E1306C]/20 hover:border-[#E1306C] rounded-full transition-all group hover:bg-[#E1306C]/5 hover:shadow-[0_0_15px_rgba(225,48,108,0.2)] shadow-[0_0_10px_rgba(225,48,108,0.1)]" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.tiktok.com/@digitalchukwudi" target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-white/20 hover:border-white rounded-full transition-all group hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] shadow-[0_0_10px_rgba(255,255,255,0.1)]" aria-label="TikTok">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.49-5.18 2.29-6.95 2.15-2.02 5.3-2.61 8.01-1.57.07 1.25.04 2.51.05 3.76-1.28-.59-2.8-.62-4.08-.1-1.34.56-2.28 1.83-2.4 3.28-.15 1.54.61 3.1 1.92 3.91 1.48.88 3.51.79 4.88-.34 1.17-.98 1.78-2.49 1.78-4.01-.02-6.52-.01-13.04-.01-19.56z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571749389768" target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-[#1877F2]/20 hover:border-[#1877F2] rounded-full transition-all group hover:bg-[#1877F2]/5 hover:shadow-[0_0_15px_rgba(24,119,242,0.2)] shadow-[0_0_10px_rgba(24,119,242,0.1)]" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
