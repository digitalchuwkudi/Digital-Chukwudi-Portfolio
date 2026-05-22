import { motion } from 'motion/react';
import { ExternalLink, Github, Code, Cpu } from 'lucide-react';

const projects = [
  {
    title: "Verve Dental",
    description: "A premium digital storefront designed to attract and onboard high-value dental patients. Integrated automated booking and sleek architectural layout.",
    role: "Full-Stack Development",
    mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Lash & Brows",
    description: "Elegant booking platform reducing friction for beauty clients. Features a luxurious UI and seamlessly integrated CRM systems.",
    role: "Growth Design & Web Development",
    mockup: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Dentist Leads",
    description: "Automated pipeline for dental practices to capture, qualify, and convert new patient prospects via AI-driven engagement flows.",
    role: "AI Lead Automation",
    mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Kroxx Global",
    description: "Enterprise-grade digital infrastructure. A robust system designed to scale global shipments and logistics operations efficiently.",
    role: "System Architecture",
    mockup: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Aura Aesthetics",
    description: "Digital presence optimization for a luxury clinic, enhancing both patient acquisition and brand positioning through refined visual design.",
    role: "Digital Design & AI Strategy",
    mockup: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Nexus Capital",
    description: "Secure and visually impactful investor portal designed to articulate high-level financial models and facilitate intuitive data flow.",
    role: "Frontend Architecture",
    mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 sm:px-12 lg:px-24 border-y border-white/5 bg-gradient-to-b from-black to-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 uppercase">Selected Work</h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto lg:mx-0">A showcase of high-end business platforms focused on growth and conversion.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Heading on Top */}
                <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-soft-white/40 font-mono text-xs uppercase tracking-widest mb-6">{project.role}</p>

                {/* Mockup Container */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/5 mb-6 relative shadow-lg group-hover:border-brand-orange/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] to-transparent opacity-50 z-10" />
                  <img src={project.mockup} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                </div>

                {/* Description below */}
                <p className="text-soft-white/70 text-sm leading-relaxed mb-8 flex-1">{project.description}</p>
                
                <div className="pt-5 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-display tracking-widest text-soft-white/40 uppercase font-semibold group-hover:text-brand-orange transition-colors">View Case Study</span>
                  <ExternalLink className="w-4 h-4 text-soft-white/40 group-hover:text-brand-orange transition-colors" />
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
          className="mt-8 relative overflow-hidden rounded-xl bg-black border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,90,54,0.1)] transition-all"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-center shrink-0">
               <Github className="w-8 h-8 text-soft-white/80" />
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
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-display text-sm uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-all whitespace-nowrap"
          >
            <Code className="w-4 h-4" />
            Access Node
          </a>
        </motion.div>
      </div>
    </section>
  );
}
