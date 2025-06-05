"use client"
import { motion } from "framer-motion"
import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Development",
      skills: [
        { name: "Unreal engine", level: 95, icon: "⚛️" },
        { name: "C++", level: 75, icon: "🟨" },
        { name: "Python", level: 85, icon: "🔷" },
        { name: " Reinforcement Learning", level: 88, icon: "🤖" },
        { name: " Full-Stack Web Development", level: 75, icon: "💚" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "AI", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "SQL", level: 85, icon: "🚀" },
        { name: "Kali Linux", level: 80, icon: "🤖" },
        { name: "java", level: 65, icon: "🐘" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "many AI tools", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Figma", level: 85, icon: "🎯" },
        
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div className="skills-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 className="title" variants={categoryVariants}>
            Skills & Expertise
          </motion.h2>

          <motion.p className="subtitle" variants={categoryVariants}>
            Technologies and tools I work with
          </motion.p>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={categoryVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="category-title">{category.title}</h3>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>

                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="certifications" variants={categoryVariants}>
            <h3 className="certifications-title">Certifications & Achievements</h3>
            <div className="certifications-grid">
              <motion.div className="cert-item" whileHover={{ scale: 1.05, rotateY: 5 }}>
                <div className="cert-icon">🏆</div>
                <div className="cert-text">
                  <h4>Game Developer</h4>
                  <p>Udemy course</p>
                </div>
              </motion.div>

              <motion.div className="cert-item" whileHover={{ scale: 1.05, rotateY: 5 }}>
                <div className="cert-icon">📜</div>
                <div className="cert-text">
                  <h4>web Developer Certification</h4>
                  <p>udemy course</p>
                </div>
              </motion.div>

              <motion.div className="cert-item" whileHover={{ scale: 1.05, rotateY: 5 }}>
                <div className="cert-icon">🎯</div>
                <div className="cert-text">
                  <h4>Reinforcement Learning</h4>
                  <p>david silver's course (youtube)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
