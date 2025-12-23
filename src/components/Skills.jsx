import { motion } from "framer-motion";
import "../styles/skills.css";

const skills = [
  {
    title: "Frontend",
    items: "React, JavaScript, HTML, CSS"
  },
  {
    title: "Backend",
    items: "Node.js, Express"
  },
  {
    title: "Database",
    items: "MySQL, SQL"
  },
  {
    title: "Tools",
    items: "Git, GitHub, VS Code, Vercel"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
