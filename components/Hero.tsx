import { ArrowBigDown } from 'lucide-react'
const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-15 md:py-24">
            <div className="flex flex-col gap-4 items-center lg:flex-row justify-center lg:items-stretch lg:justify-between">

                
                <div className="max-w-xl flex flex-col justify-center order-2 lg:order-1">
                    <h1 className="text-2xl text-center lg:text-left md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                        Hi, I am Sharath,
                        <br />
                        Full-Stack Developer & Cloud Security Analyst
                    </h1>

                    <p className="text-slate-600 text-left text-sm leading-relaxed md:text-base md:leading-9 mb-8">
                        Oracle Cloud Security Analyst at Deloitte,
                        focused on user identity, access, and cloud security.

                        Outside work, I build full-stack projects
                        and experiment with modern web technologies.

                        I enjoy breaking problems down,
                        designing simple systems, and shipping consistently.

                        Beyond code, Cricket and Cinema
                        keep me grounded and inspired.
                    </p>

                    {/* <button className="bg-secondary text-white px-6 py-3 w-full md:w-[50%] cursor-pointer rounded-md font-medium hover:opacity-90 transition">
                        <p className='flex flex-row gap-3 items-center justify-center'>Download Resume <ArrowBigDown /></p>
                    </button> */}
                </div>

                
                <div className="shrink-0 order-1 lg:order-2">
                    <div className="w-60 h-60 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-full border overflow-hidden">
                        <img
                            src="hero-modified.png"
                            alt="Sharath"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
