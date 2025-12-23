import { useEffect } from "react";

export default function useSmartCursor() {
  useEffect(() => {
    const important = document.querySelectorAll("h1, .contact-btn, .project-card");
    important.forEach(el => {
      el.addEventListener("mouseenter", () =>
        document.body.style.cursor = "grabbing"
      );
      el.addEventListener("mouseleave", () =>
        document.body.style.cursor = "default"
      );
    });
  }, []);
}
