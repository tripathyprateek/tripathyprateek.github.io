import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaBook, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const education = [
    {
        degree: 'MBA - Business Management',
        institution: 'Xavier Institute of Management (XIMB)',
        location: 'Bhubaneswar',
        period: '2024 - 2026',
        current: true,
        focus: 'Systems Business Transformation using AI, IT Strategy Design, B2B Marketing',
        icon: FaGraduationCap,
    },
    {
        degree: 'Bachelor of Technology (B.Tech)',
        institution: 'VSSUT Burla',
        location: 'Odisha',
        period: '2018 - 2022',
        detail: 'CGPA: 75.60% | Linux Foundation Scholar',
        icon: FaBook,
    },
]

const certifications = [
    { name: 'Aha! Product Management', issuer: 'Professional Certificate', date: 'Aug 2025' },
    { name: 'McKinsey Forward', issuer: 'Forward Program', date: 'Jul 2025' },
    { name: 'AWS Academy', issuer: 'Cloud Foundations', date: 'Dec 2021' },
    { name: 'Cisco CCNA', issuer: 'Intro to Networks', date: 'Jul 2021' },
    { name: 'SAP ABAP', issuer: 'Development Associate', date: 'May 2021' },
    { name: 'Linux Foundation', issuer: 'Merit Scholarship', date: 'Jun 2021' },
]

function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="education" className="py-24 sm:py-32 bg-slate-50 dark:bg-navy-700 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text -left-20 top-1/2 -translate-y-1/2">
                LEARN
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
                    <span className="tag-accent mb-4">Background</span>
                    <h2 className="section-title text-4xl sm:text-5xl mb-4">
                        Education &<br />
                        <span className="text-sky-300">Credentials</span>
                    </h2>
                    <p className="section-subtitle">
                        Academic foundation and professional certifications
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-display font-bold uppercase text-navy-600 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-sky-300 flex items-center justify-center">
                                <FaGraduationCap className="w-5 h-5 text-navy-600" />
                            </span>
                            Education
                        </h3>

                        {education.map((edu, index) => {
                            const Icon = edu.icon
                            return (
                                <div
                                    key={edu.degree}
                                    className={`sharp-card p-6 ${edu.current ? 'border-l-4 border-l-accent-300' : ''}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-sky-300/20 dark:bg-sky-300/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-sky-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <h4 className="font-display font-bold uppercase text-navy-600 dark:text-white">
                                                    {edu.degree}
                                                </h4>
                                                {edu.current && (
                                                    <span className="px-2 py-0.5 text-xs font-bold uppercase bg-accent-300 text-navy-600">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-sky-400 font-semibold">{edu.institution}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                                                {edu.period}
                                            </p>
                                            {edu.focus && (
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
                                                    <span className="font-semibold text-slate-700 dark:text-slate-200">Focus:</span> {edu.focus}
                                                </p>
                                            )}
                                            {edu.detail && (
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{edu.detail}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-display font-bold uppercase text-navy-600 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-accent-300 flex items-center justify-center">
                                <FaCertificate className="w-5 h-5 text-navy-600" />
                            </span>
                            Certifications
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-3">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                    className="sharp-card p-4 group hover:border-l-4 hover:border-l-sky-300 transition-all"
                                >
                                    <h4 className="font-semibold text-navy-600 dark:text-white text-sm">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
                                        {cert.date}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Education
