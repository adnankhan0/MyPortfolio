export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-mesh-hero" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-accent-cyan/14 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-accent-violet/12 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-accent-cyan/6 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,8,0.5)_100%)]" />

      <div className="container mx-auto px-5 sm:px-6 max-w-content relative z-10 text-center">
        <p
          className="text-accent-cyan font-medium text-xs sm:text-sm uppercase tracking-[0.25em] mb-6 opacity-0 animate-fade-in-up drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          style={{ animationDelay: '0.1s' }}
        >
          Software Engineer · Android · AI-Powered Applications
        </p>
        <h1
          className="text-hero-lg font-bold text-white mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-white">Adnan</span>{' '}
          <span className="bg-gradient-to-r from-accent-cyan via-cyan-400 to-accent-violet bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
            Ali
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          BSCS Graduate from SZABIST. Building real-world projects in Android development and AI-powered applications.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#projects"
            className="btn-primary bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-dark-900 hover:shadow-glow-cyan"
          >
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-accent-cyan transition-all duration-300 group"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100">Scroll</span>
        <svg className="w-5 h-5 animate-bounce group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
