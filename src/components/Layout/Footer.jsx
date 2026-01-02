import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/tripathyprateek', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/tripathyprateek', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/prateekonmars', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:tripathyprateek@gmail.com', label: 'Email' },
]

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#case-studies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

function Footer() {
    const handleNavClick = (e, href) => {
        e.preventDefault()
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
        <footer className="bg-navy-700 border-t border-white/10">
            <div className="section-container py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Branding */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 flex items-center justify-center bg-accent-300 text-navy-600 font-display font-black text-xl">
                                PT
                            </span>
                            <span className="text-lg font-display font-bold uppercase tracking-wide text-white">
                                Prateek Tripathy
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-6">
                            Product Manager | AI Strategist | Systems Thinker
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:bg-sky-300 hover:text-navy-600 hover:border-sky-300 transition-all"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-slate-400 hover:text-sky-300 transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Get In Touch
                        </h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Open for PM roles, AI product opportunities, and interesting conversations.
                        </p>
                        <a
                            href="mailto:tripathyprateek@gmail.com"
                            className="inline-flex items-center gap-2 text-sky-300 hover:text-accent-300 transition-colors text-sm font-semibold"
                        >
                            tripathyprateek@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                        © 2025 Prateek Tripathy. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500">
                        Built with React + Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
