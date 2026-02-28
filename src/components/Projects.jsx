const projects = [
  {
    title: 'SoulTwin',
    subtitle: 'AI Human Clone App · In development',
    description: 'An AI-powered human clone application concept focused on replicating personality and conversation using artificial intelligence. Exploring immersive, personalized digital interactions.',
    tech: ['AI', 'Kotlin', 'Android'],
    github: 'https://github.com/adnankhan0',
    live: null,
    gradient: 'from-cyan-500/20 to-violet-500/20',
    border: 'border-cyan-500/20 hover:border-cyan-400/35',
    accent: 'bg-cyan-500/20',
  },
  {
    title: 'Finity',
    subtitle: 'Personal Finance App · In development',
    description: 'A personal finance management Android application to help users track income and expenses efficiently. Focused on simplicity, automation, and improving financial awareness.',
    tech: ['Android', 'Java/Kotlin', 'Firebase'],
    github: 'https://github.com/adnankhan0',
    live: null,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    border: 'border-emerald-500/20 hover:border-emerald-400/35',
    accent: 'bg-emerald-500/20',
  },
  {
    title: 'AI Timetable Generator',
    subtitle: 'Optimized Scheduling · Academic project',
    description: 'A timetable generation system that creates optimized schedules automatically using logical algorithms and intelligent system design. Built as part of academic coursework.',
    tech: ['Python', 'Algorithms', 'Automation'],
    github: 'https://github.com/adnankhan0',
    live: null,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    border: 'border-violet-500/20 hover:border-violet-400/35',
    accent: 'bg-violet-500/20',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal portfolio',
    description: 'A modern personal portfolio website to showcase projects, technical skills, and development work. Built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/adnankhan0',
    live: null,
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20 hover:border-amber-400/35',
    accent: 'bg-amber-500/20',
  },
  {
    title: 'Java POS System',
    subtitle: 'Client Project',
    description: 'A desktop point-of-sale application built for Islamabad Appliques to manage daily sales, billing, and transactions. Delivers a single place to process sales, generate bills, and track transaction history for day-to-day business operations.',
    tech: ['Java', 'Desktop (Swing/JavaFX)', 'Database / File storage'],
    github: null,
    live: null,
    client: 'Islamabad Appliques',
    gradient: 'from-sky-500/20 to-indigo-500/20',
    border: 'border-sky-500/20 hover:border-sky-400/35',
    accent: 'bg-sky-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32 relative">
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-5 sm:px-6 max-w-content relative z-10">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3 reveal">Projects I'm building and have built</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 reveal">
          Featured <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 reveal-stagger">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative glass rounded-2xl overflow-hidden border ${project.border} bg-gradient-to-br ${project.gradient} shadow-card card-hover transition-all duration-300`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${project.accent} group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.client && (
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-xs font-medium border border-sky-500/30">
                      Client Project
                    </span>
                  )}
                </div>
                <p className="text-accent-cyan/90 text-sm font-medium mt-0.5">
                  {project.client ? project.client : project.subtitle}
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.06] text-gray-400 text-xs font-medium border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] text-gray-300 text-sm font-medium border border-white/[0.08] hover:bg-white/[0.12] hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_-8px_rgba(34,211,238,0.3)] active:scale-95 transition-all duration-200"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-cyan/15 text-accent-cyan text-sm font-medium border border-accent-cyan/20 hover:bg-accent-cyan/25 transition-all duration-200"
                    >
                      <LiveIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LiveIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
