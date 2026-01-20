import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    }

    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-image-wrapper" variants={itemVariants}>
                        <motion.div
                            className="hero-image-glow"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <motion.img
                            src="/IMG-20250903-WA0006.jpg"
                            alt="Naveenkumar"
                            className="hero-image"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Hi, I'm{' '}
                        <span className="gradient-text">Naveenkumar</span>
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        Passionate Developer Crafting{' '}
                        <motion.span
                            className="gradient-text"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                backgroundSize: '200% 200%',
                            }}
                        >
                            Secure and Innovative Solutions
                        </motion.span>
                    </motion.p>

                    <motion.p className="hero-description" variants={itemVariants}>
                        Specializing in Mobile Development, Machine Learning, and Cybersecurity
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <motion.a
                            href="/backup/Naveenkumar_V_Resume.pdf"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaFileDownload />
                            View Resume
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope />
                            Contact Me
                        </motion.a>
                    </motion.div>

                    <motion.div className="hero-social" variants={itemVariants}>
                        <motion.a
                            href="https://github.com/Naveenkumar-Dev-21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/naveenkumarv-varatharajan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="mailto:naveenkumar2006.kongu@gmail.com"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaEnvelope />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="scroll-indicator"
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className="scroll-line" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
