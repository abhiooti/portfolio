"use client"
import { motion } from "framer-motion"
import "./Navigation.css"

const Navigation = ({ currentSection, setCurrentSection, showContent }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  if (!showContent && currentSection === "home") {
    return null
  }

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentSection("home")}
        >
          <span className="logo-text">Portfolio</span>
          <div className="logo-glow"></div>
        </motion.div>

        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className={`nav-link ${currentSection === item.id ? "active" : ""}`}
                onClick={() => setCurrentSection(item.id)}
              >
                {item.label}
                <span className="nav-link-glow"></span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Creative menu toggle for mobile */}
        <motion.div className="menu-toggle" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
