import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChessKnight, FaCogs, FaRocket, FaChartBar } from 'react-icons/fa'

const skillCategories = [
    {
        id: 'strategic',
        icon: FaChessKnight,
        title: 'Strategic Thinking',
        skills: [
            { name: 'Market Research & Competitive Analysis', level: 90 },
            { name: 'Product Strategy & Roadmapping', level: 85 },
            { name: 'Go-to-Market Planning', level: 80 },
            { name: 'Opportunity Identification', level: 90 },
        ],
        accent: 'sky',
    },
    {
        id: 'technical',
        icon: FaCogs,
        title: 'Technical PM',
        skills: [
            { name: 'AI/ML Product Strategy (GenAI, RAG)', level: 85 },
            { name: 'API Design & Architecture', level: 90 },
            { name: 'Distributed Systems (Kafka)', level: 85 },
            { name: 'HLD/LLD Documentation', level: 80 },
        ],
        accent: 'accent',
    },
    {
        id: 'execution',
        icon: FaRocket,
        title: 'Execution',
        skills: [
            { name: 'Agile Leadership', level: 90 },
            { name: 'Cross-functional Management', level: 85 },
            { name: 'Requirements & User Stories', level: 85 },
            { name: 'Stakeholder Management', level: 90 },
        ],
        accent: 'sky',
    },
    {
        id: 'data',
        icon: FaChartBar,
        title: 'Data & Analytics',
        skills: [
            { name: 'Product Metrics & KPIs', level: 80 },
            { name: 'Data-Driven Decisions', level: 85 },
            { name: 'A/B Testing', level: 75 },
            { name: 'BI & Reporting', level: 80 },
        ],
        accent: 'accent',
    },
]

function SkillBar({ name, level, delay, isInView, accent }) {
    const barColor = accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'

    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-200 font-medium">{name}</span>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">{level}%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-navy-500 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
                    className={`h-full ${barColor}`}
                />
            </div>
        </div>
    )
}

function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeCategory, setActiveCategory] = useState('strategic')

    const activeData = skillCategories.find((c) => c.id === activeCategory)

    return (
        <section id="skills" className="py-24 sm:py-32 bg-white dark:bg-navy-600 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text right-0 top-1/2 -translate-y-1/2">
                SKILLS
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
                    <span className="tag mb-4">Competencies</span>
                    <h2 className="section-title text-4xl sm:text-5xl mb-4">
                        PM Skills<br />
                        <span className="text-sky-300">Matrix</span>
                    </h2>
                    <p className="section-subtitle">
                        Core competencies across product management domains
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Category Selector */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-1 space-y-3"
                    >
                        {skillCategories.map((category) => {
                            const Icon = category.icon
                            const isActive = activeCategory === category.id
                            const accentBg = category.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`w-full text-left p-4 transition-all duration-300 ${isActive
                                        ? 'sharp-card border-l-4 border-l-sky-300'
                                        : 'hover:bg-slate-100 dark:hover:bg-navy-500'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${accentBg} flex items-center justify-center ${isActive ? 'scale-110' : ''} transition-transform`}>
                                            <Icon className="w-6 h-6 text-navy-600" />
                                        </div>
                                        <div>
                                            <h4 className={`font-display font-bold uppercase text-sm ${isActive ? 'text-navy-600 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                                                {category.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {category.skills.length} skills
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            )
                        })}
                    </motion.div>

                    {/* Skills Display */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <div className="sharp-card p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-14 h-14 ${activeData.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'} flex items-center justify-center`}>
                                    <activeData.icon className="w-7 h-7 text-navy-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold uppercase text-navy-600 dark:text-white">
                                        {activeData.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Proficiency based on experience
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {activeData.skills.map((skill, index) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        delay={0.1 + index * 0.1}
                                        isInView={isInView}
                                        accent={activeData.accent}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills
