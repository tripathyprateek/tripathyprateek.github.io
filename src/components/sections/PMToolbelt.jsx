import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const toolCategories = [
    {
        title: 'Product Management',
        icon: '🎯',
        tools: ['JIRA', 'Aha!', 'ProductBoard', 'Figma', 'Miro', 'Notion'],
        accent: 'sky',
    },
    {
        title: 'Data & Analytics',
        icon: '📊',
        tools: ['SQL', 'Python', 'Tableau', 'Google Analytics', 'Excel', 'Power BI'],
        accent: 'accent',
    },
    {
        title: 'Frameworks',
        icon: '🧩',
        tools: ['Jobs-to-be-Done', 'OKRs', 'RICE', 'Lean Canvas', 'Design Thinking', 'Scrum'],
        accent: 'sky',
    },
    {
        title: 'Development',
        icon: '💻',
        tools: ['Git', 'Agile/Scrum', 'API Design', 'AWS', 'Docker', 'CI/CD'],
        accent: 'accent',
    },
]

function PMToolbelt() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="py-24 sm:py-32 bg-slate-50 dark:bg-navy-700 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text -left-20 top-1/2 -translate-y-1/2">
                TOOLS
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
                    <span className="tag-accent mb-4">Arsenal</span>
                    <h2 className="section-title text-4xl sm:text-5xl mb-4">
                        PM<br />
                        <span className="text-sky-300">Toolbelt</span>
                    </h2>
                    <p className="section-subtitle">
                        Tools and methodologies for building great products
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {toolCategories.map((category, index) => {
                        const accentBg = category.accent === 'sky' ? 'bg-sky-300' : 'bg-accent-300'

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                className="sharp-card group"
                            >
                                {/* Colored header */}
                                <div className={`${accentBg} p-4`}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{category.icon}</span>
                                        <h3 className="font-display font-bold uppercase text-sm text-navy-600">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Tools */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {category.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-navy-500 text-slate-700 dark:text-slate-200"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PMToolbelt
