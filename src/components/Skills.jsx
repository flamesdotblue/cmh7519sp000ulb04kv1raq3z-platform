import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Category = ({ title, skills }) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
    <h3 className="text-xl font-semibold text-emerald-300">{title}</h3>
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {skills.map((s) => (
        <motion.div key={s} variants={item} className="group relative">
          <div className="flex items-center justify-center rounded-lg border border-emerald-400/20 bg-zinc-800/40 px-3 py-2 text-sm text-zinc-200 shadow-inner hover:border-emerald-400/60 hover:bg-emerald-400/5 transition-all">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            {s}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 space-y-10">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className="text-sm text-zinc-400">Hover to glow</div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Category title="Front-End" skills={["HTML","CSS","JavaScript","React.js","Vite"]} />
          <Category title="Back-End" skills={["Java","Spring Boot","Python","Django"]} />
          <Category title="Databases" skills={["MySQL","PostgreSQL"]} />
          <Category title="AI Tools" skills={["Gemini API","Voiceflow","Make","Relevance AI","N8N","Genkit"]} />
          <Category title="Languages" skills={["Java","Python","C","C++"]} />
          <Category title="Tools & IDEs" skills={["VS Code","Git","GitHub","Eclipse","PyCharm","Docker","Jenkins","Tomcat"]} />
        </div>
      </div>
    </section>
  );
}
