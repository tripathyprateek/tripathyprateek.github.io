import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#case-studies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, toggleDarkMode }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-navy-600/95 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3">
                        <span className="w-10 h-10 flex items-center justify-center bg-accent-300 text-navy-600 font-display font-black text-xl">
                            PT
                        </span>
                        <span className="hidden sm:block text-lg font-display font-bold uppercase tracking-wide text-white">
                            Prateek Tripathy
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="nav-link text-white/80 hover:text-accent-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-3 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.span
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiSun className="w-5 h-5 text-accent-300" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiMoon className="w-5 h-5" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Resume Button */}
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="hidden sm:inline-flex btn-primary py-3 px-6 text-sm"
                        >
                            Resume
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-3 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <FiX className="w-5 h-5" />
                            ) : (
                                <FiMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-navy-700 border-t border-white/10"
                    >
                        <div className="section-container py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="py-4 px-4 hover:bg-white/5 text-white font-semibold uppercase tracking-wider text-sm transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/assets/resume.pdf"
                                download
                                className="btn-primary text-center mt-4"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
