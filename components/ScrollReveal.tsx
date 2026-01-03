'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ScrollReveal = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal