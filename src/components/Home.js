"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./Home.css"

const Home = ({ onReveal, showContent }) => {
  const [typewriterText, setTypewriterText] = useState("")
  const fullText = "Creative Developer & Designer"

  useEffect(() => {
    if (showContent) {
      let index = 0
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setTypewriterText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [showContent, fullText])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!showContent) {
    return (
      <div className="home-reveal" onClick={onReveal}>
        <motion.div
          className="reveal-content"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="reveal-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Click to Enter
          </motion.div>
          <motion.div
            className="reveal-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Experience the Future
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="reveal-bg-elements">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`bg-element bg-element-${i + 1}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="home-section">
      <div className="home-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AbhiShek ooti
          </motion.h1>

          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {typewriterText}
            <span className="cursor-blink">|</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Game Developer skilled in Unreal Engine (C++), Reinforcement Learning, AI
             Python (NumPy, Pandas), and Full-Stack Web Development..
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button className="btn btn-primary" onClick={scrollToNext}>
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            transition: { duration: 0.3 },
          }}
        >
          <div className="image-container">
            <img src="IMG_3225.JPG" alt="Profile" className="profile-image" />
            <div className="image-glow"></div>
            <div className="image-ring"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToNext}
      >
        <div className="scroll-text">Scroll to explore</div>
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
