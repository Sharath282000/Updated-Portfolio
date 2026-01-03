import ScrollReveal from './ScrollReveal'


const Contact = () => {
    return (
        <ScrollReveal>
            <div className='px-10 md:px-20 py-12 md:py-20'>
                <div className='flex flex-col gap-2 justify-center'>
                    <h1 className='font-bold text-lg mb-1 md:text-xl'>Get in Touch</h1>
                    <p className="text-slate-600 text-sm md:text-base">
                        Want to chat or discuss opportunities?
                        Send me a direct question on{" "}
                        <a
                            href="https://x.com/Sharath_tech"
                            target="_blank"
                            className="underline text-[#00A8CC]"
                        >
                            X
                        </a>
                    </p>
                </div>
            </div>
        </ScrollReveal>

    )
}

export default Contact