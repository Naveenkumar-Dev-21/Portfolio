import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const contactLinks = [
        {
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:naveenkumar2006.kongu@gmail.com',
            label: 'naveenkumar2006.kongu@gmail.com',
            color: '#EA4335',
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/Naveenkumar-Dev-21',
            label: 'Naveenkumar-Dev-21',
            color: '#fff',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/naveen-kumar-53b6ab291/',
            label: 'naveen-kumar',
            color: '#0A66C2',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    }

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">
                        I'm currently available for freelance work and open to discussing new projects.
                        Let's create something amazing together!
                    </p>

                    <motion.div
                        className="contact-links"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {contactLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target={link.name !== 'Email' ? '_blank' : undefined}
                                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="contact-link card"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: link.color,
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="contact-icon"
                                    style={{ color: link.color }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <link.icon />
                                </motion.div>
                                <div className="contact-info">
                                    <h3 className="contact-name">{link.name}</h3>
                                    <p className="contact-label">{link.label}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="footer"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p>&copy; 2025 Naveenkumar. Developed with Care.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
