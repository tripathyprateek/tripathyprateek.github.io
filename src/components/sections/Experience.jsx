import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
    {
        title: 'Product Manager Intern',
        company: 'IBM',
        department: 'Software Defined Networking',
        period: 'Apr 2025 - Jun 2025',
        highlights: [
            'Identified $2B AI-driven networking market opportunity',
            'Designed GenAI integration using RAG, ETL, MCP, and Agentic AI',
            'Cross-product metrics correlation across SDN portfolio',
        ],
        skills: ['Product Management', 'AI/ML', 'Market Research'],
        featured: true,
        accent: 'sky',
    },
    {
        title: 'Specialist Programmer',
        company: 'Infosys',
        department: 'Technology Services',
        period: 'Jun 2022 - Jul 2024',
        duration: '2 yrs 2 mos',
        highlights: [
            'APIs reducing response time by 35%',
            'Kafka adoption: 75% latency reduction (2s → 500ms)',
            'Led agile strategies across 3 cross-functional teams',
        ],
        skills: ['Full-Stack Dev', 'Spring Boot', 'Kafka'],
        featured: true,
        accent: 'accent',
    },
    {
        title: 'Community Manager',
        company: 'The Product Folks',
        department: 'GrabChai Events',
        period: 'Feb 2025 - Present',
        highlights: [
            'Organizing GrabChai events across 15+ global cities',
            'Building PM and AI enthusiast community',
        ],
        skills: ['Community', 'Events', 'Networking'],
        accent: 'sky',
    },
    {
        title: 'Co-Coordinator, X-SEED',
        company: 'XIMB',
        department: 'Entrepreneurship Cell',
        period: 'Mar 2025 - Present',
        highlights: [
            'Fostering innovation among MBA cohort',
            'Building startup ecosystem at XIMB',
        ],
        skills: ['Leadership', 'Entrepreneurship'],
        accent: 'accent',
    },
    {
        title: 'SDE Intern',
        company: 'Airblack',
        department: 'Ed-Tech Platform',
        period: 'Feb 2022 - Jul 2022',
        highlights: [
            'Backend development and API design',
            'Node.js application development',
        ],
        skills: ['Node.js', 'Backend', 'API'],
        accent: 'sky',
    },
]

function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="py-24 sm:py-32 bg-slate-50 dark:bg-navy-700 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text -left-20 top-1/2 -translate-y-1/2">
                JOURNEY
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
                    <span className="tag mb-4">Career</span>
                    <h2 className="section-title mb-4">
                        Experience<br />
                        <span className="text-sky-300">Timeline</span>
                    </h2>
                    <p className="section-subtitle">
                        From engineer to product strategist
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-navy-200 dark:bg-navy-500" />

                    <div className="space-y-6">
                        {experiences.map((exp, index) => {
                            const accentBg = exp.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'
                            const accentText = exp.accent === 'sky' ? 'text-sky-300' : 'text-accent-300'

                            return (
                                <motion.div
                                    key={`${exp.company}-${exp.title}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="relative pl-12 md:pl-24"
                                >
                                    {/* Timeline marker */}
                                    <div className={`absolute left-0 md:left-8 ${accentBg} w-4 h-4 -translate-x-1.5`} />

                                    {/* Card */}
                                    <div className={`sharp-card p-6 ${exp.featured ? 'border-l-4 border-l-' + (exp.accent === 'sky' ? 'sky-300' : 'accent-300') : ''}`}>
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-lg font-display font-bold uppercase text-navy-600 dark:text-white">
                                                    {exp.title}
                                                </h3>
                                                <p className={`text-sm font-semibold ${accentText}`}>
                                                    {exp.company}
                                                    <span className="text-slate-500 dark:text-slate-400 font-normal"> • {exp.department}</span>
                                                </p>
                                            </div>
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 ${accentBg} flex-shrink-0`} />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-slate-100 dark:bg-navy-500 text-slate-600 dark:text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
