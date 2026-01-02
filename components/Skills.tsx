import React from 'react'
import {skills} from '@/utils/skills'

const Skills = () => {
  return (
    <div className='px-10 md:px-20 py-12 md:py-20'>
         <h2 className="font-bold text-lg mb-1 md:text-xl">Technical Skills & Technologies</h2>
         <p className='text-slate-600 text-sm leading-relaxed'>The technologies behind the products and experiments I bring to life.</p>

         <div className='flex items-center justify-center mt-4'>
            <div className='flex flex-wrap flex-row gap-2'>
                {skills.map(data=>(
                    <p className='px-3 py-2 bg-primary text-white text-xs md:text-sm rounded-sm' key={data.id}>{data.name}</p>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Skills