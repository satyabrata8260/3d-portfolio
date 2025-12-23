import { useEffect } from "react";

export default function useStoryScroll() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--story-hero", 1 + y * 0.0002);
      document.documentElement.style.setProperty("--story-mid", 1 + y * 0.0001);
      document.documentElement.style.setProperty("--story-deep", 1 + y * 0.00005);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
