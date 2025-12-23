import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    title: "TMDB Movie Explorer",
    desc: "A React-based movie discovery platform using TMDB API with trailers, cast details, and a modern responsive UI."
  },
  {
    title: "Love Story Platform",
    desc: "An interactive storytelling web app where users create and share personalized love stories using images, music, and QR codes."
  },
  {
    title: "Virtual Zoo",
    desc: "A digital zoo experience allowing users to explore animals with rich information and a clean, responsive interface."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <span className="view">View Case Study →</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
