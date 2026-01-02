import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaMedal, FaStar, FaGlobe, FaBookmark, FaGavel, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const awards = [
    {
        icon: FaMedal,
        title: 'Prodalytics PM Case Competition',
        issuer: 'XLRI Jamshedpur',
        date: 'Nov 2024',
        description: 'National winner competing against top MBA programs across India.',
        featured: true,
        accent: 'accent',
    },
    {
        icon: FaStar,
        title: 'Fidelity Code Feast 1.0',
        issuer: 'Fidelity International',
        date: 'Jul 2022',
        description: 'Green Award for CO2 emissions browser extension. Awarded PPO.',
        accent: 'sky',
    },
    {
        icon: FaGlobe,
        title: 'Global Coding Challenge',
        issuer: 'Credit Suisse',
        date: 'Nov 2021',
        description: 'International Rank 84 out of 10,000+ participants.',
        accent: 'accent',
    },
    {
        icon: FaBookmark,
        title: 'Linux Foundation Scholarship',
        issuer: 'Linux Foundation',
        date: 'Jun 2021',
        description: 'Merit-based international scholarship among 500 globally.',
        accent: 'sky',
    },
    {
        icon: FaGavel,
        title: 'Hackathon Judge',
        issuer: 'NW Hacks & Hack the Mountains',
        date: 'Jun 2021',
        description: 'Evaluated innovative solutions at major hackathon events.',
        accent: 'accent',
    },
]

function Awards() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % awards.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length)
    }

    return (
        <section id="awards" className="py-24 sm:py-32 bg-white dark:bg-navy-600 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text -right-20 top-1/2 -translate-y-1/2">
                AWARDS
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="tag mb-4">Recognition</span>
                    <h2 className="section-title text-4xl sm:text-5xl mb-4">
                        Awards &<br />
                        <span className="text-sky-300">Achievements</span>
                    </h2>
                    <p className="section-subtitle">
                        Milestones in product and technology
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => {
                        const Icon = award.icon
                        const accentBg = award.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'

                        return (
                            <motion.div
                                key={award.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                className={`sharp-card ${award.featured ? 'border-l-4 border-l-accent-300' : ''}`}
                            >
                                {/* Icon header */}
                                <div className={`${accentBg} p-4`}>
                                    <Icon className="w-6 h-6 text-navy-600" />
                                </div>

                                <div className="p-6">
                                    <h3 className="font-display font-bold uppercase text-navy-600 dark:text-white mb-1">
                                        {award.title}
                                    </h3>
                                    <p className="text-sm text-sky-400 font-semibold mb-1">{award.issuer}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                        {award.date}
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        {award.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="sharp-card"
                        >
                            {(() => {
                                const award = awards[currentIndex]
                                const Icon = award.icon
                                const accentBg = award.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'

                                return (
                                    <>
                                        <div className={`${accentBg} p-4`}>
                                            <Icon className="w-6 h-6 text-navy-600" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-display font-bold uppercase text-navy-600 dark:text-white mb-1">
                                                {award.title}
                                            </h3>
                                            <p className="text-sm text-sky-400 font-semibold mb-1">{award.issuer}</p>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{award.date}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">{award.description}</p>
                                        </div>
                                    </>
                                )
                            })()}
                        </motion.div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prevSlide}
                            className="p-3 bg-slate-100 dark:bg-navy-500 hover:bg-sky-300 hover:text-navy-600 transition-colors"
                        >
                            <FaChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="flex gap-2">
                            {awards.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 transition-colors ${idx === currentIndex ? 'bg-sky-300' : 'bg-slate-300 dark:bg-navy-500'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-3 bg-slate-100 dark:bg-navy-500 hover:bg-sky-300 hover:text-navy-600 transition-colors"
                        >
                            <FaChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards
