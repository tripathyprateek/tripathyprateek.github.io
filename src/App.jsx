import { useState, useEffect } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import CaseStudies from './components/sections/CaseStudies'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import PMToolbelt from './components/sections/PMToolbelt'
import Awards from './components/sections/Awards'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode')
            if (saved !== null) return JSON.parse(saved)
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <CaseStudies />
                <Experience />
                <Skills />
                <PMToolbelt />
                <Awards />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
