import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowRight, FaPlay } from 'react-icons/fa'
import { HiDocument } from 'react-icons/hi2'

const roles = [
    'Product Manager',
    'AI Strategist',
    'Systems Thinker',
]

const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/tripathyprateek', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/tripathyprateek', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/prateekonmars', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:tripathyprateek@gmail.com', label: 'Email' },
]

const stats = [
    { value: '$2B', label: 'Market Opportunity' },
    { value: '35%', label: 'API Improvement' },
    { value: '15+', label: 'Global Events' },
]

function TypeWriter({ words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2500 }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentWordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < word.length) {
                    setCurrentText(word.slice(0, currentText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(word.slice(0, currentText.length - 1))
                } else {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className="text-sky-300">
            {currentText}
            <span className="animate-pulse text-accent-300">|</span>
        </span>
    )
}

function Hero() {
    const scrollToSection = (href) => {
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
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-600">
            {/* Large watermark text */}
            <div className="watermark-text top-1/2 left-0 -translate-y-1/2 opacity-[0.03] text-white">
                PRODUCT
            </div>

            {/* Diagonal stripe accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-300/5 transform skew-x-12 origin-top-right" />

            {/* Main content */}
            <div className="relative section-container py-32 lg:py-40 z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left - Content */}
                    <div className="order-2 lg:order-1">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="tag-accent">
                                Available for Opportunities
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="hero-headline text-white mb-4"
                        >
                            Prateek
                            <br />
                            <span className="text-sky-300">Tripathy</span>
                        </motion.h1>

                        {/* Role typewriter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-white/80">
                                <TypeWriter words={roles} />
                            </h2>
                        </motion.div>

                        {/* Story arc */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
                        >
                            Engineer → <span className="text-sky-300 font-semibold">IBM PM Intern</span> → MBA at XIMB → <span className="text-accent-300 font-semibold">Aspiring AI Product Leader</span>
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <button
                                onClick={() => scrollToSection('#case-studies')}
                                className="btn-primary"
                            >
                                View Case Studies
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                            <a
                                href="/assets/resume.pdf"
                                download
                                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-600"
                            >
                                <HiDocument className="w-5 h-5" />
                                Resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center gap-3"
                        >
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:bg-sky-300 hover:text-navy-600 hover:border-sky-300 transition-all duration-200"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Stats & Visual */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Profile image with sharp frame */}
                            <div className="relative mb-12 lg:mb-0">
                                <div className="absolute -inset-4 bg-gradient-to-br from-sky-300/20 to-accent-300/10" />
                                <img
                                    src="/images/prateek-profile.jpg"
                                    alt="Prateek Tripathy"
                                    className="relative w-full max-w-md mx-auto aspect-square object-cover"
                                />
                                {/* Status badge */}
                                <div className="absolute bottom-4 left-4 px-4 py-2 bg-accent-300 text-navy-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 bg-navy-600 rounded-full animate-pulse" />
                                    Open to Work
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-white/10"
                >
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center lg:text-left">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-300 via-accent-300 to-sky-300" />
        </section>
    )
}

export default Hero
