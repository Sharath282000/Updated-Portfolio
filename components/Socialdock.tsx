import React from 'react'
import Image from 'next/image'
import { socials } from '@/utils/social'

const Socialdock = () => {
    return (
        <div
            className="
        fixed
        left-1/2
        -translate-x-1/2
        bottom-[calc(1.5rem+env(safe-area-inset-bottom))]
        z-999
      "
        >
            <div
                className="
          flex
          items-center
          gap-4
          md:gap-2
          px-6
          py-3
          rounded-full
         bg-white/30
          backdrop-blur-md

          border
          border-white/30

          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        "
            >
                {socials.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              w-6 h-6
              md:w-9 md:h-9
              flex items-center justify-center
              rounded-full
              hover:bg-slate-100
              transition
            "
                    >
                        <Image
                            src={item.icon}
                            alt={item.alt}
                            width={24}
                            height={24}
                            className="opacity-90"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Socialdock
