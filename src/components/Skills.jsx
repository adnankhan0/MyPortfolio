const skillCategories = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Kotlin', 'Python', 'JavaScript'],
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/25 hover:border-cyan-400/40',
    icon: CodeIcon,
    iconColor: 'text-cyan-400',
  },
  {
    title: 'Development',
    items: ['Android app development', 'Software development fundamentals', 'Frontend fundamentals'],
    gradient: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/25 hover:border-violet-400/40',
    icon: DevIcon,
    iconColor: 'text-violet-400',
  },
  {
    title: 'AI & Emerging Tech',
    items: ['AI-powered applications', 'Automation concepts', 'Intelligent software systems'],
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/25 hover:border-emerald-400/40',
    icon: AIIcon,
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Android Studio', 'Firebase'],
    gradient: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/25 hover:border-amber-400/40',
    icon: ToolsIcon,
    iconColor: 'text-amber-400',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6 max-w-content">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3 reveal">Technologies & skills I use</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 reveal">
          Skills & <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative glass rounded-2xl p-6 sm:p-8 border ${category.border} bg-gradient-to-br ${category.gradient} card-hover transition-all duration-300`}
            >
              <div className={`flex items-center gap-3 mb-5 ${category.iconColor}`}>
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.08] icon-hover group-hover:border-white/20">
                  <category.icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block px-4 py-2 rounded-xl bg-white/[0.06] text-gray-300 text-sm font-medium border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.1] hover:text-white hover:scale-105 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4m4-4l4 4-4 4" />
    </svg>
  )
}

function DevIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

function AIIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function ToolsIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
