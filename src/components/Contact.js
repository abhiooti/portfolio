"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      alert("Message sent successfully!")
    }, 2000)
  }

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/abhiooti", color: "#333" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit", color: "#0077b5" },
    { name: "Twitter", icon: "🐦", url: "https://x.com/home", color: "#1da1f2" },
    { name: "Email", icon: "📧", url: "abhiooti03@gmail.com", color: "#ea4335" },
    { name: "Discord", icon: "🎮", url: "https://discord.com/channels/@me", color: "#7289da" },
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
    <section className="contact-section">
      <div className="container">
        <motion.div className="contact-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 className="title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p className="subtitle" variants={itemVariants}>
            Let's create something amazing together
          </motion.p>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-card">
                <h3 className="info-title">Let's Talk</h3>
                <p className="info-text">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-details">
                  <motion.div className="detail-item" whileHover={{ x: 10 }}>
                    <span className="detail-icon">📍</span>
                    <span className="detail-text"> dharwad </span>
                  </motion.div>

                  <motion.div className="detail-item" whileHover={{ x: 10 }}>
                    <span className="detail-icon">📧</span>
                    <span className="detail-text">abhiooti03@gmail.com</span>
                  </motion.div>

                  <motion.div className="detail-item" whileHover={{ x: 10 }}>
                    <span className="detail-icon">📱</span>
                    <span className="detail-text">9019752911</span>
                  </motion.div>
                </div>

                <div className="social-links">
                  <h4 className="social-title">Connect With Me</h4>
                  <div className="social-grid">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        className="social-link"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="social-icon">{social.icon}</span>
                        <span className="social-name">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="form-group">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="form-group">
                  <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="form-group">
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={`form-submit ${isSubmitting ? "submitting" : ""}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span className="loading-text">
                      <span className="loading-spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
