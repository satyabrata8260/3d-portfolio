import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import FloatingBackground from "./components/FloatingBackground";
import useScrollParallax from "./hooks/useScrollParallax";
import "./styles/global.css";
import Background from "./components/Background";
import BackgroundLayer from "./components/BackgroundLayer";
import CursorGlow from "./components/CursorGlow";
import SignaturePulse from "./components/SignaturePulse";
import FounderStatement from "./components/FounderStatement";
import useStoryScroll from "./hooks/useStoryScroll";
import useSmartCursor from "./hooks/useSmartCursor";
export default function App() {
  useScrollParallax();
    useStoryScroll();
  useSmartCursor();

  return (
    <>
      <SignaturePulse />
      <CursorGlow />
      <Background />
      <BackgroundLayer />
      <Navbar />
      <Hero3D />
      <FounderStatement />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
