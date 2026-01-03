'use client'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { projectsData } from '@/utils/projects'
import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const Works = () => {
    return (
        <ScrollReveal>
            <div className='px-10 md:px-20 py-12 md:py-20'>
                <div className='mb-5'>
                    <h2 className="font-bold text-lg mb-1 md:text-xl">Featured Works</h2>
                    <p className='text-slate-600 text-sm leading-relaxed'>Some projects and products I have built while learning, experimenting, and growing as a developer.</p>
                </div>
                {projectsData.map((data, index) => (<div key={data.id}>
                    <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }} className='flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center'>
                        <div className="w-full md:w-[40%] max-w-sm lg:max-w-md">
                            <Image src={data.imageUrl} alt={data.title} className='w-full h-auto rounded-md object-cover' width={600} height={400} />
                        </div>
                        <div className='flex-1'>
                            <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-2'>{data.title}</h3>
                            <div className='flex items-center gap-3 mb-4 text-sm'>
                                <div className='flex w-full flex-wrap gap-2'>
                                    {data.techStack.map(d => (
                                        <Badge key={d} variant="outline" className='bg-primary text-xs md:text-sm text-white'>{d}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className='text-slate-600 leading-relaxed text-sm md:text-base'>{data.description}</p>
                            </div>
                            <div className='mt-5'>
                                <a href={data.link} target="_blank" rel="noopener noreferrer" className='px-3 py-2 rounded-md bg-primary text-white text-xs md:text-sm'>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    {index !== projectsData.length - 1 && (
                        <hr className='my-10' />
                    )}
                </div>))}

            </div>
        </ScrollReveal>

    )
}

export default Works