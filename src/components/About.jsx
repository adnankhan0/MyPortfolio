export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32 relative">
      <div className="absolute inset-0 bg-dark-800/40" />
      <div className="container mx-auto px-5 sm:px-6 max-w-content relative z-10">
        <div className="max-w-3xl">
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3 reveal">Professional summary</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 reveal">
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="relative glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-white/[0.08] shadow-card card-hover reveal overflow-hidden hover:border-accent-cyan/10">
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-accent-cyan/50 to-accent-violet/40 hidden sm:block rounded-full" />
            <div className="relative">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                I'm a <strong className="text-white">BSCS graduate from SZABIST</strong> with a focus on <strong className="text-accent-cyan">Android development</strong> and <strong className="text-accent-violet">AI-powered applications</strong>. I build real-world software projects and ship products that are both technically solid and user-focused.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                My work centers on mobile apps and intelligent software—from personal finance tools to AI-driven concepts like human-like conversation systems. I apply strong fundamentals in software development, clean code, and problem-solving. I'm especially interested in projects with <strong className="text-white">startup potential</strong> and in growing my experience through hands-on development.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I bring a <strong className="text-accent-emerald">detail-oriented</strong> approach: committed to building things that work. Open to collaborations and opportunities where I can contribute and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
