import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.07),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Aspiring Full Stack Developer and AI Engineer with a strong foundation in web technologies and artificial intelligence. Proficient in creating responsive applications and integrating intelligent features, such as the Gemini API. Eager to apply strong analytical and problem-solving skills to build innovative solutions. A quick learner passionate about continuous learning at the intersection of web development and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
