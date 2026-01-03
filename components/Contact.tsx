import ScrollReveal from './ScrollReveal'

const Contact = () => {
    return (
        <ScrollReveal>
            <section className="px-10 md:px-20 py-12 md:py-10 mb-10">
                <div className="flex flex-col gap-2 max-w-2xl">
                    <h2 className="font-bold text-lg md:text-xl">
                        Get in Touch
                    </h2>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Want to chat or discuss opportunities?
                        Reach me via{" "}
                        <a
                            href="mailto:sharathmurugan28@gmail.com"
                            className="underline text-[#00A8CC] hover:opacity-80 transition"
                        >
                            email
                        </a>{" "}
                        ,{" "}
                        <a
                            href="https://x.com/Sharath_tech"
                            target="_blank"
                            className="underline text-[#00A8CC] hover:opacity-80 transition"
                        >
                            social
                        </a> or {" "}
                        <a
                            href="https://www.linkedin.com/in/sharath-m-6936671b0/"
                            target="_blank"
                            className="underline text-[#00A8CC] hover:opacity-80 transition"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
            </section>
        </ScrollReveal>
    )
}

export default Contact