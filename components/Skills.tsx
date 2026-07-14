'use client'

import { skills } from '@/utils/skills'
import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <ScrollReveal>
      <div className='px-10 md:px-20 py-12 md:py-20'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Technical Skills & Technologies
          </h2>
          <p className='text-slate-600 mt-3 text-sm leading-relaxed'>The technologies behind the products and experiments I bring to life.</p>
        </motion.div>

        <div className='flex mt-4'>
          <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }} className='flex flex-wrap flex-row gap-2'>
            {skills.map(data => (
              <motion.p variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
                transition={{ duration: 0.6, ease: 'easeOut' }} className='px-3 py-2 bg-primary text-white text-xs md:text-sm rounded-sm' key={data.id}>{data.name}</motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </ScrollReveal>

  )
}

export default Skills