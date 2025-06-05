"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import CustomCursor from "./components/CustomCursor"
import Navigation from "./components/Navigation"
import ParticleBackground from "./components/ParticleBackground"

function App() {
  const [currentSection, setCurrentSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    // Scroll listener for creative effects
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for section detection
    const sections = document.querySelectorAll(".section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId && showContent) {
              setCurrentSection(sectionId)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [showContent])

  const handleRevealContent = () => {
    setShowContent(true)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setCurrentSection(sectionId)
  }

  return (
    <div className="App" ref={containerRef}>
      <CustomCursor />
      <ParticleBackground />

      {/* Creative scroll progress indicator */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      {/* Floating elements for creative effect */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element floating-element-${i + 1}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Initial Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="loading-content"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
                <div className="loading-ring"></div>
              </div>
              <motion.div
                className="loading-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Loading Portfolio...
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {isLoaded && (
        <>
          <Navigation currentSection={currentSection} setCurrentSection={scrollToSection} showContent={showContent} />

          <main className="main-content">
            {/* Home Section */}
            <section id="home" className="section" data-section="home">
              <Home onReveal={handleRevealContent} showContent={showContent} />
            </section>

            {/* About Section */}
            {showContent && (
              <section id="about" className="section" data-section="about">
                <About />
              </section>
            )}

            {/* Projects Section */}
            {showContent && (
              <section id="projects" className="section" data-section="projects">
                <Projects />
              </section>
            )}

            {/* Skills Section */}
            {showContent && (
              <section id="skills" className="section" data-section="skills">
                <Skills />
              </section>
            )}

            {/* Contact Section */}
            {showContent && (
              <section id="contact" className="section" data-section="contact">
                <Contact />
              </section>
            )}
          </main>
        </>
      )}
    </div>
  )
}

export default App
