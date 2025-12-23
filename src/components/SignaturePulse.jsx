import { useEffect } from "react";
import "../styles/signature.css";

export default function SignaturePulse() {
  useEffect(() => {
    const el = document.querySelector(".signature-pulse");
    requestAnimationFrame(() => el.classList.add("play"));
  }, []);
  return <div className="signature-pulse" />;
}
