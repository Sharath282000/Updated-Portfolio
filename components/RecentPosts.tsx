'use client'
import { posts } from '@/utils/xposts'
import { Avatar, AvatarImage } from './ui/avatar'
import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const RecentPosts = () => {
    return (
        <ScrollReveal>
            <div className='bg-[#e4f5f9]'>
                <div className='px-10 md:px-20 py-5'>
                    <div className="flex items-start justify-between gap-4 mb-3.5">
                        <div className="max-w-2xl">
                            <h2 className="font-bold mb-1 text-lg md:text-xl">
                                Recent X Posts
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Some thoughts, updates, and insights I've shared on X about my journey in tech and development.
                            </p>
                        </div>

                        <a
                            href="https://x.com/Sharath_tech"
                            target="_blank"
                            className="text-[#00A8CC] text-sm md:text-base underline shrink-0 whitespace-nowrap"
                        >
                            View All
                        </a>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 mb-2'>
                        {posts.map(data => (
                            <motion.div initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }} key={data.id} className='bg-white w-full border rounded-sm p-6'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row flex-wrap items-center mb-4'>
                                        <Avatar>
                                            <AvatarImage src="/Hero-modified.png" />
                                        </Avatar>
                                        <div>
                                            <h4 className='text-black text-sm md:text-lg font-semibold'>Sharath</h4>
                                            <p className='text-gray-400 text-xs md:text-base'>@Sharath_tech</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href={data.link} target='_blank'>
                                            <Avatar>
                                                <AvatarImage src="twitter-x.png" />
                                            </Avatar>
                                        </a>
                                    </div>
                                </div>
                                <p className='text-slate-600 leading-relaxed text-sm md:text-base'>
                                    {data.description}
                                </p>
                                <div className='mt-3 gap-2 flex flex-col lg:flex-row lg:gap-0 md:items-center md:justify-between'>
                                    <p className='text-gray-400 text-xs md:text-sm'>{data.date}</p>
                                    <p className='p-3 border text-slate-500 rounded-md text-xs md:text-sm'>
                                        {data.tags}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </ScrollReveal>

    )
}

export default RecentPosts