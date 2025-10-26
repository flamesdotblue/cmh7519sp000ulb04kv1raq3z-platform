import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function TiltCard({ title, description, link }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-400/10 to-transparent" />
      <div
        ref={ref}
        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-transform duration-150 will-change-transform shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-400">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="mt-3 text-zinc-300">{description}</p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="relative">
      {/* Projects */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <span className="text-sm text-zinc-400">Hover cards for 3D tilt</span>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <TiltCard
                title="Travel Planner Website"
                description="Built a full-stack travel site (React+Vite, Spring Boot, MySQL) featuring a Gemini API chatbot fine-tuned for precise user assistance."
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <TiltCard
                title="No-Code Cleaning Agent"
                description="Created a no-code AI agent (Voiceflow, Make) for booking cleaning services with dynamic pricing based on user-provided property details."
                link="https://creator.voiceflow.com/share/6866283c3dd3b7e09dd1f9c9/development"
              />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <TiltCard
                title="Agricultural Sales Website"
                description="Developed a Django-based e-commerce platform for farmers, featuring user authentication, product management, and a shopping cart."
                link="https://www.linkedin.com/posts/bomma-ganesh-a073552b9_ugcPost-7246917535319613440-Vw1U"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-3xl md:text-4xl font-bold text-white mb-8">Experience / Internships</motion.h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent" />
            <TimelineItem date="May 2025" title="Virtual Internship - Web Development & AI" org="EduSkills Foundation" />
            <TimelineItem date="June 2024" title="Social Internship" org="Swecha Andhra Pradesh" />
            <TimelineItem date="Dec 2023" title="Project Expo Participant" org="KL-CIIE, Koneru Lakshmaiah Education Foundation" />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-3xl md:text-4xl font-bold text-white mb-8">Certifications</motion.h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CertItem title="Oracle Cloud Infrastructure 2025 Certified DevOps Professional" link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=635DD10F83AB9C67D5B6AF301E477BF32AE5B89C07809C71753495BFD968EC70" />
            <CertItem title="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional" link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4CAAC260134E339096A818E019596AF69A9F76E78BE7E8F422800FB6869F1EC5" />
          </div>
          <p className="mt-4 text-sm text-zinc-400">More credentials available on request.</p>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</motion.h2>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="grid gap-6 md:grid-cols-3">
            <a href="mailto:nsv2190@gmail.com" className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/15 p-2 text-emerald-300"><Mail /></div>
                <div>
                  <div className="text-zinc-400 text-xs">Email</div>
                  <div className="font-medium text-white">nsv2190@gmail.com</div>
                </div>
              </div>
            </a>
            <a href="tel:+919059854218" className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/15 p-2 text-emerald-300"><Phone /></div>
                <div>
                  <div className="text-zinc-400 text-xs">Phone</div>
                  <div className="font-medium text-white">+91 9059854218</div>
                </div>
              </div>
            </a>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="text-zinc-400 text-xs mb-2">Social</div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/70 px-3 py-2 text-sm hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-colors">
                  <Linkedin size={18} className="text-emerald-300" /> LinkedIn
                </a>
                <a href="https://github.com/saivighnesh2190" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/70 px-3 py-2 text-sm hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-colors">
                  <Github size={18} className="text-emerald-300" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
          <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} N Sai Vighnesh. Built with React, Vite, Tailwind, and Framer Motion.
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ date, title, org }) {
  return (
    <div className="relative pl-8 py-6">
      <div className="absolute left-0 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.9)]" />
      <div className="text-sm text-emerald-300">{date}</div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="text-zinc-400">{org}</div>
    </div>
  );
}

function CertItem({ title, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-colors">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="font-medium text-white group-hover:text-emerald-200">{title}</div>
          <div className="text-xs text-zinc-400 mt-1">View credential</div>
        </div>
        <ExternalLink size={18} className="text-emerald-300" />
      </div>
    </a>
  );
}
