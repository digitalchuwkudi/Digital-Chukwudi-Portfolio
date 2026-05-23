import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code, CheckCircle2 } from 'lucide-react';
import ReactPlayer from 'react-player';

const projects = [
  {
    title: "Verve Dental",
    description: "Designed to help dental clinics attract new patients, simplify appointment bookings, and improve patient conversion through a modern digital experience.",
    role: "Dental Growth Platform",
    whatIDid: [
      "Website Design & Development",
      "AI Receptionist Integration",
      "Appointment Booking System",
      "Conversion Optimization",
      "Patient Lead Flow"
    ],
    resultText: "Built to improve patient inquiries, automate engagement, and increase appointment conversions.",
    mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    caseStudyLink: "https://vervedental.pages.dev"
  },
  {
    title: "Lash & Brows Near You",
    description: "Luxury beauty platform designed to help beauty businesses increase bookings, improve customer experience, and elevate brand perception online.",
    role: "Beauty Booking Platform",
    whatIDid: [
      "Website Design",
      "Booking Integration",
      "Mobile Optimization",
      "CRM Integration",
      "Brand Experience Design"
    ],
    resultText: "Created a smoother customer journey that helps convert visitors into booked beauty appointments.",
    mockup: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop",
    caseStudyLink: "https://lash-and-brows-near-you.pages.dev"
  },
  {
    title: "Dentist Leads",
    description: "AI-powered lead generation platform designed to help dental practices capture, qualify, and convert new patient inquiries automatically.",
    role: "AI Lead Conversion System",
    whatIDid: [
      "AI Receptionist Agent",
      "Lead Automation",
      "Landing Page Design",
      "Patient Qualification System",
      "Conversion Funnel"
    ],
    resultText: "Built to automate patient engagement and help clinics convert more website visitors into qualified leads.",
    mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    caseStudyLink: "https://dentistleads.pages.dev"
  },
  {
    title: "Kroxx Global Concept",
    description: "Modern business platform designed for a phone and laptop gadgets brand offering device sales, repairs, upgrades, and accessories",
    role: "Customer Service & Booking Platform",
    whatIDid: [
      "Website Design & Development",
      "Service-Focused User Experience",
      "AI Receptionist Integration",
      "Mobile Optimization",
      "Booking & Inquiry Flow",
      "Brand Experience Design"
    ],
    resultText: "Helped customers inquire about phone and laptop, gadgets, request repairs, book services, and connect with the business faster online.",
    mockup: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    caseStudyLink: "https://kroxxglobalconcept.pages.dev"
  },
  {
    title: "Cinematic AI Visual Experience",
    description: "High-end AI-generated cinematic visuals designed to capture attention, strengthen brand storytelling, and create immersive digital experiences for modern businesses and creators.",
    role: "AI Cinematic Video Creation",
    whatIDid: [
      "AI Video Creation",
      "Cinematic Scene Design",
      "Motion Direction",
      "Visual Storytelling",
      "AI-Assisted Production"
    ],
    resultText: "Created a visually immersive AI-powered cinematic experience designed to increase engagement and elevate premium brand perception online.",
    videoUrl: "https://www.youtube.com/watch?v=NW9a-Z8w4vs",
    caseStudyLink: "https://www.youtube.com/watch?v=NW9a-Z8w4vs"
  },
  {
    title: "Kroxx Global Concept AI Commercial",
    description: "AI-generated promotional advertisement created to help Kroxx Global showcase its phone and laptop gadgets, repair services, and premium customer experience through cinematic visual storytelling.",
    role: "AI Advertisement Campaign",
    whatIDid: [
      "AI Video Creation",
      "Advertisement Concept Design",
      "Cinematic Product Visuals",
      "Motion Editing",
      "Brand-Focused Storytelling"
    ],
    resultText: "Produced a modern AI-powered commercial designed to attract attention, strengthen brand identity, and improve customer engagement online.",
    videoUrl: "https://youtube.com/shorts/6VKfMY08fTU",
    caseStudyLink: "https://youtube.com/shorts/6VKfMY08fTU"
  }
];

export function SelectedWork() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 lg:px-24 border-y border-white/5 bg-gradient-to-b from-black to-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 uppercase">Selected Work</h2>
          <p className="text-soft-white/60 text-lg max-w-2xl lg:mx-0">A collection of AI-powered websites and digital systems designed to help businesses grow, convert, and scale online.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-[#111114] border border-white/10 p-6 sm:p-8 hover:border-brand-orange/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,90,54,0.15)] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-orange/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                {/* Heading on Top */}
                <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-soft-white/40 font-mono text-xs uppercase tracking-widest mb-6">{project.role}</p>

                {/* Mockup Container */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/5 mb-6 relative shadow-lg group-hover:border-brand-orange/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] to-transparent opacity-50 z-10 pointer-events-none" />
                  {project.videoUrl ? (
                    <div className="w-full h-full relative z-20">
                      <ReactPlayer
                        url={project.videoUrl}
                        width="100%"
                        height="100%"
                        playing={playingIndex === index}
                        controls
                        onPlay={() => setPlayingIndex(index)}
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        config={{
                          youtube: {
                            playerVars: { modestbranding: 1, rel: 0 }
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <img src={project.mockup} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                  )}
                </div>

                {/* Description below */}
                <p className="text-soft-white/90 text-sm leading-relaxed mb-8">{project.description}</p>
                
                <div className="w-full text-left mb-8 flex-1">
                  <h4 className="font-display uppercase text-xs tracking-widest text-brand-orange mb-4 font-bold border-b border-white/5 pb-2">What I Did</h4>
                  <ul className="space-y-2">
                    {project.whatIDid.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-soft-white/70">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange/80 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full bg-[#0B0B0D] p-4 rounded-lg border border-white/5 mb-6 relative hover:border-white/10 transition-colors text-left object-bottom mt-auto">
                    <p className="text-sm font-light text-soft-white/80"><span className="font-semibold text-white">Result:</span> {project.resultText}</p>
                </div>
                
                <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between">
                  <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link w-full justify-between">
                    <span className="text-xs font-display tracking-widest text-soft-white/40 uppercase font-semibold group-hover/link:text-brand-orange transition-colors">View Case Study</span>
                    <ExternalLink className="w-4 h-4 text-soft-white/40 group-hover/link:text-brand-orange transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 relative overflow-hidden rounded-xl bg-black border border-white/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,90,54,0.1)] transition-all"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="p-3 bg-[#111] rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)] inline-block">
               <Github className="w-6 h-6 text-soft-white/60" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">Open Source Lab</h3>
              <p className="text-soft-white/60">Explore my technical playground and algorithm configurations.</p>
            </div>
          </div>
          
          <a 
            href="https://github.com/digitalchuwkudi" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-display text-sm uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-all whitespace-nowrap w-full sm:w-auto mt-4 sm:mt-0"
          >
            <Code className="w-4 h-4" />
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
