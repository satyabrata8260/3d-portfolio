import { Canvas } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  useGLTF,
  useAnimations
} from "@react-three/drei";
import { useRef, useEffect } from "react";
import "../styles/hero.css";
import HologramAura from "./HologramAura";


/* =========================
   ANIMATED HUMAN MODEL
========================= */
function Human() {
  const group = useRef();
  const { scene, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.6}
      position={[0, -1.8, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function Hero3D() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>SOFTWARE ENGINEER</h2>
        <h1>
          Building <span>Luxury</span>
          <br />
          Digital <span>Experiences</span>
        </h1>
        <p>
          I design and engineer premium digital products with precision,
          clarity, and modern technology.
        </p>
      </div>

      <Canvas camera={{ position: [0, 1.5, 5], fov: 35 }}
      gl={{ toneMappingExposure: 1.05 }}>
        {/* LIGHTING */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 5]} intensity={1.3} />
        <directionalLight position={[-4, 1, -3]} intensity={0.55} color="#eab308" />

        {/* ENV */}
        <Environment preset="city" environmentIntensity={0.4} />
        <HologramAura />


        {/* HUMAN */}
        <Human />

        {/* SHADOW */}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.35}
          blur={2.5}
          scale={10}
        />

        {/* CAMERA MOTION */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </section>
  );
}
