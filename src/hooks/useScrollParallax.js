import { useEffect } from "react";

export default function useScrollParallax() {
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      const bg = document.querySelector(".bg-layer");
      const stars = document.querySelector(".stars-layer");

      if (bg) bg.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (stars) stars.style.transform = `translateY(${scrollY * 0.25}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
