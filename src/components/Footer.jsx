export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 border-t border-white/[0.06] bg-dark-900">
      <div className="container mx-auto px-5 sm:px-6 max-w-content flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {currentYear} Adnan Ali. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-gray-500 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Back to top
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-accent-cyan text-sm font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
