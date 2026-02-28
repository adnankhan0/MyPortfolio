import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}
