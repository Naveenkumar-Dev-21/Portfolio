import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        A little bit about my journey and passion for technology
                    </p>

                    <motion.div
                        className="about-content card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            Welcome to my portfolio! I am <strong className="gradient-text">Naveenkumar</strong>,
                            a passionate and dedicated developer with a strong foundation in building secure and
                            innovative applications. My journey in technology has been driven by a curiosity for
                            solving complex problems and a desire to create software that makes a difference.
                        </p>
                        <p>
                            I have hands-on experience in <strong>mobile and desktop development</strong>, with a
                            keen interest in <strong>machine learning</strong> and <strong>software security</strong>.
                            I am actively learning new concepts related to penetration testing and ethical hacking,
                            driven by my passion for capturing flags and responsibly taking control of vulnerable
                            machines in practice environments.
                        </p>
                        <p>
                            My clear ambition is to build a career in the <strong className="gradient-text">
                                cybersecurity domain</strong>, combining my development skills with security expertise
                            to create robust and secure solutions.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
