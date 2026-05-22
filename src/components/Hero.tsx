import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0B0B0D]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent z-20" />
        
        {/* Anti-watermark dark blur */}
        <div className="absolute -bottom-4 -right-4 w-64 h-24 bg-[#0B0B0D]/90 backdrop-blur-2xl blur-lg z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover grayscale-[0.2] transform-gpu will-change-transform"
          src="https://res.cloudinary.com/dx41voszq/video/upload/q_auto,f_auto/v1779440520/Crimson_beam_landscape_animation_202605212246_hvajye.mp4"
        />
      </div>

      {/* Main Bottom Content arranged exactly like Screenshot 2 layout */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 relative z-10 mt-auto pt-[40vh] lg:pt-80">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 lg:gap-6 w-full lg:max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-orange/30 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,0,0.15)]">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_#ff0000]" />
            <span className="text-sm font-medium tracking-wide text-brand-orange uppercase font-display text-xs">System Online</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
            Architecting Growth with AI-Powered Systems.
          </h1>
          
          <p className="text-lg sm:text-xl text-soft-white/90 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            Premium design meets intelligent automation. I craft high-converting digital experiences tailored for scale.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 lg:mb-2"
        >
          <a 
            href="#work" 
            className="group flex items-center justify-center px-8 h-[60px] bg-white text-black rounded-sm font-display text-base uppercase tracking-widest font-bold transition-all hover:bg-soft-white hover:scale-[1.02] active:scale-95 w-full sm:w-auto shadow-2xl"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
