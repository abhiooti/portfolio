"use client"
import { motion } from "framer-motion"
import "./Projects.css"

const Projects = () => {
  const projects = [
   {
    id: 1,
    title: "Virtual drawing",
    description:
      "Built a hand-tracking based virtual drawing tool using Python, OpenCV, and MediaPipe for gesture-controlled interactions.",
    image: "download.jpg", // Correct path from public folder
    technologies: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/abhiooti/virtual_painting.git",
  },
    {
      id: 2,
      title: "Gun game",
      description:
        "Developed an AI-integrated shooting game using Unreal Engine (C++) with intelligent enemy behavior and real-time player interaction.",
      image: "download2.jpg",
      technologies: ["unreal engine","c++","blender"],
      liveUrl: "https://github.com/abhiooti/gun_game.git",
      githubUrl: "https://github.com/abhiooti/gun_game.git",
    },
    {
      id: 3,
      title: "Netflix clone",
      description:
        "Created a full-stack Netflix clone with user authentication, video streaming, and responsive UI using html, css, and javascript",
      image: "download3.jpg",
      technologies: ["HTML","CSS","javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhiooti/netflix_clone.git",
    },
    {
      id: 4,
      title: "self-driving car",
      description:
        "Designed a self-driving car simulation using Python and Reinforcement Learning to navigate and learn through environmental feedback.",
      image: "download4.jpg",
      technologies: ["python","tensorflow","gym","stable-basebline"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhiooti/self_driving_car.git",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="projects-section">
      <div className="container">
        <motion.div className="projects-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 className="title" variants={cardVariants}>
            Featured Projects
          </motion.h2>

          <motion.p className="subtitle" variants={cardVariants}>
            A showcase of my recent work and creative solutions
          </motion.p>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
