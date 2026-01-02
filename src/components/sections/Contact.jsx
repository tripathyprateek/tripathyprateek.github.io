import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPaperPlane, FaCheck, FaArrowRight } from 'react-icons/fa'
import { HiDocument } from 'react-icons/hi2'

const contactMethods = [
    { icon: FaEnvelope, label: 'Email', value: 'tripathyprateek@gmail.com', href: 'mailto:tripathyprateek@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/tripathyprateek', href: 'https://linkedin.com/in/tripathyprateek' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/tripathyprateek', href: 'https://github.com/tripathyprateek' },
    { icon: FaPhone, label: 'Phone', value: '+91 7008086467', href: 'tel:+917008086467' },
]

function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formStatus, setFormStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('submitting')

        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formsubmit.co/ajax/tripathyprateek@gmail.com', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
                setTimeout(() => setFormStatus('idle'), 5000)
            } else {
                setFormStatus('error')
                setTimeout(() => setFormStatus('idle'), 3000)
            }
        } catch (error) {
            setFormStatus('error')
            setTimeout(() => setFormStatus('idle'), 3000)
        }
    }

    return (
        <section id="contact" className="py-24 sm:py-32 bg-navy-600 relative overflow-hidden">
            {/* Watermark */}
            <div className="watermark-text right-0 top-1/2 -translate-y-1/2 text-white/[0.02]">
                CONNECT
            </div>

            {/* Diagonal accent */}
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-sky-300/5 transform -skew-x-12 origin-bottom-left" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Info */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="tag-accent mb-4">Get In Touch</span>
                        <h2 className="section-title text-white mb-6">
                            Let's<br />
                            <span className="text-sky-300">Connect</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-md">
                            Interested in product management, AI, or just want to chat? Reach out!
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-4 mb-10">
                            {contactMethods.map((method) => {
                                const Icon = method.icon
                                return (
                                    <a
                                        key={method.label}
                                        href={method.href}
                                        target={method.href.startsWith('mailto') || method.href.startsWith('tel') ? undefined : '_blank'}
                                        rel={method.href.startsWith('mailto') || method.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-sky-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon className="w-5 h-5 text-navy-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs uppercase tracking-wider text-slate-400">{method.label}</p>
                                            <p className="font-semibold text-white">{method.value}</p>
                                        </div>
                                        <FaArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-300 group-hover:translate-x-1 transition-all" />
                                    </a>
                                )
                            })}
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-wrap gap-4">
                            <a href="/assets/resume.pdf" download className="btn-primary">
                                <HiDocument className="w-5 h-5" />
                                Resume
                            </a>
                            <a
                                href="https://linkedin.com/in/tripathyprateek"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-600"
                            >
                                <FaLinkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-700 p-8 space-y-6">
                            <h3 className="text-xl font-display font-bold uppercase text-navy-600 dark:text-white">
                                Send a Message
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-slate-100 dark:bg-navy-600 border-0 text-navy-600 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-300 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-slate-100 dark:bg-navy-600 border-0 text-navy-600 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-300 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-slate-100 dark:bg-navy-600 border-0 text-navy-600 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-300 transition-all"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-slate-100 dark:bg-navy-600 border-0 text-navy-600 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-300 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                className={`w-full btn-primary justify-center ${formStatus === 'success' ? 'bg-green-500 hover:bg-green-600' : ''
                                    } ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {formStatus === 'idle' && (
                                    <>
                                        <FaPaperPlane className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                                {formStatus === 'submitting' && (
                                    <>
                                        <div className="w-4 h-4 border-2 border-navy-600 border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                )}
                                {formStatus === 'success' && (
                                    <>
                                        <FaCheck className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                )}
                                {formStatus === 'error' && 'Try Again'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-300 via-accent-300 to-sky-300" />
        </section>
    )
}

export default Contact
