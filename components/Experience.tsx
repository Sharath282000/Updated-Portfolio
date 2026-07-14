"use client";

import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '@/utils/experience'
import ScrollReveal from './ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <ScrollReveal>
    <section className="py-15 px-4 relative overflow-hidden bg-background text-foreground">
      {/* Soft theme-matching ambient blurs using your custom deep primary tone behind the glass layers */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Work Experience
          </h2>
          <p className='text-slate-600 mt-3 text-sm leading-relaxed'>The story of my professional path</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-border ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className={`absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center text-sm z-20 shadow-md backdrop-blur-md transition-all duration-300 ${
                exp.current 
                  ? "bg-background border-primary text-secondary shadow-secondary/20 scale-110" 
                  : "bg-background border-border text-muted-foreground"
              }`}>
                {exp.icon}
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
                )}
              </div>

              {/* Glassmorphism Card */}
              <div className={`backdrop-blur-xl border rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300 relative overflow-hidden ${
                exp.current 
                  ? "bg-white/30 dark:bg-card/20 border hover:border-primary/30" 
                  : "bg-white/30 dark:bg-card/10 border-border hover:border-muted-foreground/30"
              }`}>
                {/* Micro Ambient Glow Accent inside the active card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {exp.company}
                      {exp.current && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full text-secondary font-normal border border-secondary">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm mt-0.5">{exp.role}</p>
                  </div>
                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground bg-white/40 dark:bg-black/30 backdrop-blur-md border border-border px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground/80 flex items-center gap-1 md:mr-1">
                      📍 {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-foreground/80 dark:text-foreground/90 text-sm md:text-base leading-relaxed mb-6 list-disc list-outside pl-4">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs md:text-sm px-2.5 py-1 rounded-md bg-card border border-border text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}