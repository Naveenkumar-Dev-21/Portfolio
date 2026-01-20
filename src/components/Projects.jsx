import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const projects = [
        {
            title: 'File Sharing App',
            description: 'A secure file sharing application with MinIO for object storage.',
            tech: ['Python', 'MinIO', 'Encryption'],
        },
        {
            title: 'Mobile Achievement Tracker',
            description: 'Cross-platform mobile app to track and celebrate achievements and goals.',
            tech: ['Flutter', 'Dart', 'Firebase'],
            features: ['User authentication', 'Progress tracking', 'Cloud sync', 'Notifications'],
        },
        {
            title: 'Cipher Hide',
            description: 'Steganography tool to hide text messages within image, audio, and video files.',
            tech: ['Python', 'Pillow', 'Pydub'],
            features: ['Multi-format support', 'Bitwise operations', 'Covert communication'],
        },
        {
            title: 'Dark Web Monitoring Tool',
            description: 'Automated tool to scan dark web for mentions of specific keywords and potential breaches.',
            tech: ['Python', 'Scrapy', 'Tor', 'NLP'],
            features: ['Automated crawling', 'Real-time alerts', 'Detailed reports'],
        },
        {
            title: 'Media Player',
            description: 'Desktop music and video player with advanced features and modern UI.',
            tech: ['Python', 'PyQt5', 'yt-dlp'],
            features: ['Audio visualization', 'Playlist management', 'Equalizer', 'YouTube support'],
        },
        {
            title: 'Multi-Modal Biometric Auth',
            description: 'Prototype demonstrating face, voice, iris, and fingerprint recognition.',
            tech: ['Python', 'OpenCV', 'Librosa'],
            features: ['Multi-modal auth', 'Real-time capture', 'User-friendly GUI'],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
            },
        },
    }

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        Some of my notable work and experiments
                    </p>

                    <motion.div
                        className="projects-grid grid grid-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="project-card card"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <motion.div
                                        className="project-number"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.features && (
                                    <ul className="project-features">
                                        {project.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
