import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaUsers, FaTrophy, FaLightbulb } from 'react-icons/fa'

const highlights = [
    {
        icon: FaCode,
        title: 'Technical Depth',
        description: 'APIs reducing response time by 35%; Kafka for 75% latency reduction',
        accent: 'bg-sky-300',
    },
    {
        icon: FaUsers,
        title: 'Community Leader',
        description: '15+ GrabChai events globally; X-SEED Coordinator at XIMB',
        accent: 'bg-accent-300',
    },
    {
        icon: FaTrophy,
        title: 'Award Winner',
        description: 'National PM case competition winner at XLRI',
        accent: 'bg-sky-300',
    },
    {
        icon: FaLightbulb,
        title: 'AI Product Strategy',
        description: '$2B market opportunity identified at IBM',
        accent: 'bg-accent-300',
    },
]

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-24 sm:py-32 bg-slate-50 dark:bg-navy-700 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text -right-20 top-1/2 -translate-y-1/2 -rotate-90">
                ABOUT
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left - Section Header */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <span className="tag mb-4">About Me</span>
                        <h2 className="section-title mb-6">
                            From Engineer<br />
                            <span className="text-sky-300">To Product</span>
                        </h2>
                        <p className="section-subtitle">
                            MBA at Xavier Institute of Management, passionate about AI-driven product strategy.
                        </p>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8 space-y-8"
                    >
                        {/* Story Cards */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="sharp-card p-8">
                                <div className="w-1 h-16 bg-sky-300 mb-6" />
                                <h3 className="text-xl font-display font-bold uppercase text-navy-600 dark:text-white mb-4">
                                    IBM Experience
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    As a <strong className="text-navy-600 dark:text-sky-300">Product Manager Intern</strong>, worked on AI-driven networking solutions, identifying a <strong className="text-accent-400">$2 billion market opportunity</strong> that became IBM Network Intelligence.
                                </p>
                            </div>

                            <div className="sharp-card p-8">
                                <div className="w-1 h-16 bg-accent-300 mb-6" />
                                <h3 className="text-xl font-display font-bold uppercase text-navy-600 dark:text-white mb-4">
                                    Infosys Background
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <strong className="text-navy-600 dark:text-sky-300">25+ months</strong> as Specialist Programmer. Deep expertise in APIs, event streaming, and distributed systems with a focus on performance optimization.
                                </p>
                            </div>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="sharp-card p-6 group"
                                >
                                    <div className={`w-12 h-12 ${item.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-6 h-6 text-navy-600" />
                                    </div>
                                    <h4 className="font-display font-bold uppercase text-sm text-navy-600 dark:text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Value Props */}
                        <div className="sharp-card p-8 border-l-4 border-accent-300">
                            <h3 className="text-lg font-display font-bold uppercase text-navy-600 dark:text-white mb-4">
                                What Sets Me Apart
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Technical + Business Hybrid',
                                    'AI Product Expertise (GenAI, RAG, Agentic AI)',
                                    'Entrepreneurial Mindset',
                                    'Quantifiable Impact Focus',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-sky-300 flex-shrink-0" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
