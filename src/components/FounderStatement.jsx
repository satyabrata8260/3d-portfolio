import { motion } from "framer-motion";
import "../styles/statement.css";

export default function FounderStatement() {
  return (
    <section className="statement">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        I don’t just build interfaces —
        <br /> I design <span>digital authority</span>.
      </motion.h2>
    </section>
  );
}
