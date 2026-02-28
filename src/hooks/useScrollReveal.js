import { useEffect } from 'react'

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1,
}

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal, .reveal-stagger')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
