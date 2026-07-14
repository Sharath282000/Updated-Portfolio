'use client'
import { motion } from "framer-motion"
import { ArrowBigDown } from "lucide-react"

const Hero = () => {
    return (
            <section className="max-w-6xl mx-auto px-6 py-15 md:py-24">
                <div className="flex flex-col gap-4 items-center lg:flex-row justify-center lg:items-stretch lg:justify-between">


                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-xl text-center lg:text-left flex flex-col justify-center order-2 lg:order-1">
                        <h1 className="text-2xl lg:text-left md:text-4xl lg:text-5xl font-extrabold leading-snug  mb-6">
                            Hi, I'm Sharath 👋
                            <br />
                            Oracle Cloud Security Engineer | Full-Stack Developer
                        </h1>

                        <p className="text-slate-600 text-left text-sm leading-relaxed md:text-base md:leading-9 mb-8">
                            Experience Associate at PwC,
                            specializing in Oracle Cloud Security, Identity & Access Management, Oracle Cloud Infrastructure, Oracle AI Technologies.
                            <br></br>
                            Outside of work, I build modern full-stack web applications using modern technologies.
                            I enjoy solving real-world problems, designing scalable systems, and continuosly learning new technologies. Beyond technology, Cricket and Cinema keep me inspired.
                        </p>

                         <a className="bg-primary text-white px-6 py-3 w-full md:w-[50%] text-sm md:text-base cursor-pointer rounded-md font-medium hover:opacity-90 transition" href="/Sharath_Resume.pdf" download
                            rel="noopener noreferrer">
                        <p className='flex flex-row gap-3 items-center justify-center text-sm md:text-base'>Download Resume <ArrowBigDown className="text-sm md:text-base" /></p>
                    </a>
                    </motion.div>


                    <div className="shrink-0 order-1 lg:order-2">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="w-60 h-60 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-full border overflow-hidden">
                            <img
                                src="/DP.jpg"
                                alt="Sharath"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>
    )
}

export default Hero
