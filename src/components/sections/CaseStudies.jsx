import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaArrowRight, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa'

const caseStudies = [
    {
        id: 'ibm',
        title: 'IBM Network Intelligence Discovery',
        company: 'IBM',
        role: 'Product Manager Intern',
        year: '2024',
        problem: 'Fragmented network management across IBM\'s SDN portfolio made it difficult to correlate metrics and optimize the end-to-end network lifecycle.',
        solution: 'Designed an AI-driven correlation framework using RAG, ETL pipelines, MCP, and Agentic AI to unify network insights across products.',
        impact: [
            { value: '$2B', label: 'Market Opportunity' },
            { value: 'New', label: 'Product Created' },
            { value: '3', label: 'Products Integrated' },
        ],
        skills: ['Market Research', 'AI Product Strategy', 'Technical Architecture', 'Competitive Analysis'],
        accentColor: 'sky',
    },
    {
        id: 'infosys',
        title: 'Backend Performance Optimization',
        company: 'Infosys',
        role: 'Specialist Programmer',
        year: '2022-23',
        problem: 'High latency in real-time data sharing (2 seconds) was impacting user experience and system performance.',
        solution: 'Advocated and led client adoption of Apache Kafka for event streaming, redesigned API architecture for optimal performance.',
        impact: [
            { value: '75%', label: 'Latency Reduction' },
            { value: '35%', label: 'API Performance' },
            { value: '3', label: 'Teams Led' },
        ],
        skills: ['Technical PM', 'Performance Optimization', 'Kafka', 'API Design'],
        accentColor: 'accent',
    },
    {
        id: 'xseed',
        title: 'X-Seed Startup Ecosystem',
        company: 'XIMB',
        role: 'Coordinator',
        year: '2024-25',
        problem: 'Limited startup-student collaboration meant MBA students lacked exposure to real entrepreneurial challenges.',
        solution: 'Built a structured partnership program connecting startups with MBA students for live consulting projects.',
        impact: [
            { value: '15+', label: 'Live Projects' },
            { value: 'Growing', label: 'Ecosystem' },
            { value: 'Multiple', label: 'Events' },
        ],
        skills: ['Platform Strategy', 'Community Building', 'Program Design', 'Partnerships'],
        accentColor: 'sky',
    },
]

function CaseStudyCard({ study, index, isInView }) {
    const [isHovered, setIsHovered] = useState(false)
    const accentBg = study.accentColor === 'sky' ? 'bg-sky-300' : 'bg-accent-300'
    const accentText = study.accentColor === 'sky' ? 'text-sky-300' : 'text-accent-300'

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="sharp-card h-full flex flex-col overflow-hidden">
                {/* Header */}
                <div className={`${accentBg} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-navy-600/70">
                            {study.company}
                        </span>
                        <span className="text-xs font-medium text-navy-600/70">
                            {study.year}
                        </span>
                    </div>
                    <h3 className="text-xl font-display font-bold uppercase text-navy-600 leading-tight">
                        {study.title}
                    </h3>
                    <p className="text-sm text-navy-600/80 mt-2 font-medium">
                        {study.role}
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Problem & Solution */}
                    <div className="space-y-4 mb-6 flex-1">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Challenge
                            </span>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                {study.problem}
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Solution
                            </span>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                {study.solution}
                            </p>
                        </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="border-t border-slate-200 dark:border-navy-500 pt-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <FaChartLine className={`w-4 h-4 ${accentText}`} />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Impact
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {study.impact.map((item, idx) => (
                                <div key={idx} className="text-center">
                                    <div className={`text-2xl font-display font-black ${accentText}`}>
                                        {item.value}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {study.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-slate-100 dark:bg-navy-500 text-slate-600 dark:text-slate-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

function CaseStudies() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="case-studies" className="py-24 sm:py-32 bg-white dark:bg-navy-600 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text left-0 top-1/2 -translate-y-1/2">
                WORK
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
                    <span className="tag-accent mb-4">Portfolio</span>
                    <h2 className="section-title mb-4">
                        Case<br />
                        <span className="text-sky-300">Studies</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world product challenges tackled with measurable impact
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={study.id}
                            study={study}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
