import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <motion.nav
            className="navbar glass"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="navbar-content">
                    <motion.a
                        href="#home"
                        className="navbar-logo gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Naveenkumar
                    </motion.a>

                    <ul className="navbar-menu">
                        {navItems.map((item) => (
                            <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                                <a
                                    href={`#${item.id}`}
                                    className={activeSection === item.id ? 'active' : ''}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            className="active-indicator"
                                            layoutId="activeIndicator"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
