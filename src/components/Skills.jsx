import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    FaPython, FaGitAlt, FaDatabase, FaMobileAlt,
    FaDesktop, FaShieldAlt, FaBrain, FaRobot
} from 'react-icons/fa'
import { SiFlutter, SiDart } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const skills = [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Dart', icon: SiDart, color: '#0175C2' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'MinIO', icon: FaDatabase, color: '#C72E49' },
        { name: 'NLP', icon: FaRobot, color: '#FF6F61' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Machine Learning', icon: FaBrain, color: '#FF6B6B' },
        { name: 'Mobile Dev', icon: FaMobileAlt, color: '#4ECDC4' },
        { name: 'Desktop Dev', icon: FaDesktop, color: '#95E1D3' },
        { name: 'Security', icon: FaShieldAlt, color: '#F38181' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    }

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Skills</h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with
                    </p>

                    <motion.div
                        className="skills-grid grid grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card card"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, -2, 2, 0],
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="skill-icon"
                                    style={{ color: skill.color }}
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <skill.icon />
                                </motion.div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
