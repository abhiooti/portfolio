"use client"
import { motion } from "framer-motion"
import "./About.css"

const About = () => {
  const skills = [
    { name: "Game development", level: 95 },
    { name: "Unreal engine", level: 90 },
    { name: "Reinforcement Learning", level: 88 },
    { name: "Full stack development", level: 85 },
    { name: "Python", level: 100 },
    { name: "C++", level: 85 },
    { name: "DSA", level: 95 },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="about-section">
      <div className="container">
        <motion.div className="about-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 className="title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <motion.p variants={itemVariants}>
                Skilled Game Developer with hands-on experience in Unreal Engine and strong proficiency in C++ for game mechanics and system development. 
                Specialized in Artificial Intelligence and Reinforcement Learning, with a proven track record of designing intelligent game agents and custom environments.
                 Advanced knowledge of Python and its libraries (NumPy, Pandas, Matplotlib) for AI modeling and simulation.
              </motion.p>

              <motion.p variants={itemVariants}>
                Experienced in building full-stack web applications with modern front-end and back-end technologies. 
                Passionate about combining game development, AI, and web technologies to build immersive and intelligent digital experiences.
              </motion.p>

              <motion.div className="stats" variants={itemVariants}>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="skills-section" variants={itemVariants}>
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
