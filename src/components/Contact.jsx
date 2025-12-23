import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Work Together</h2>

        <p>
          Have a project in mind or want to collaborate?
          <br />
          I’m always open to meaningful conversations.
        </p>

        <a href="mailto:routsatyabrata24@gmail.com" className="contact-btn">
          Contact Me
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sbrm"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/satya-brata8260"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
