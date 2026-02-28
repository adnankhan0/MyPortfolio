const links = [
  {
    label: 'Email',
    href: 'mailto:adnanali.dev0@gmail.com',
    icon: EmailIcon,
    description: 'adnanali.dev0@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adnankhan0',
    icon: GitHubIcon,
    description: 'github.com/adnankhan0',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adnan-ali-cs',
    icon: LinkedInIcon,
    description: 'linkedin.com/in/adnan-ali-cs',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6 max-w-content">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3 reveal">Let's connect</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 reveal">
          Get in <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-white/[0.08] shadow-card hover:border-white/[0.12] transition-colors duration-300">
            <p className="text-gray-400 text-center mb-10 text-base sm:text-lg leading-relaxed">
              Open to internships, collaborations, and opportunities in software development—especially Android and AI-powered applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 reveal-stagger">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 sm:p-8 rounded-2xl glass border border-white/[0.08] hover:border-accent-cyan/30 hover:bg-accent-cyan/5 card-hover transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] text-accent-cyan group-hover:bg-accent-cyan/15 group-hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.4)] mb-4 transition-all duration-300 icon-hover">
                    <item.icon className="w-6 h-6" />
                  </span>
                  <span className="font-semibold text-white">{item.label}</span>
                  <span className="text-sm text-gray-500 mt-1.5 break-all text-center group-hover:text-gray-400 transition-colors">
                    {item.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
