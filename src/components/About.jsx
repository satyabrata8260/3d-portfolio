import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I’m <span>Satyabrata Rout</span>, a software engineer focused on building
          premium, scalable, and visually powerful digital products. I believe
          great software is not just about functionality — it’s about presence,
          clarity, and confidence.
        </p>

        <p>
          I enjoy working at the intersection of <strong>engineering</strong>{" "}
          and <strong>design</strong>, creating experiences that feel modern,
          professional, and trustworthy. My goal is to deliver digital solutions
          that stand out quietly — without noise, without clutter.
        </p>
      </motion.div>
    </section>
  );
}
