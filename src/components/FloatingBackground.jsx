import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus } from "@react-three/drei";
import { useRef } from "react";

function FloatingShape({ position, color, scale }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    ref.current.rotation.x = clock.getElapsedTime() * 0.05;
  });

  return (
    <Float speed={1} floatIntensity={1.5} rotationIntensity={0.4}>
      <Icosahedron
        ref={ref}
        args={[1, 0]}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.15}
        />
      </Icosahedron>
    </Float>
  );
}

export default function FloatingBackground() {
  return (
    <div className="bg-canvas">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />

        <FloatingShape position={[-4, 2, -2]} color="#60a5fa" scale={1.4} />
        <FloatingShape position={[4, -1, -3]} color="#38bdf8" scale={1.1} />
        <FloatingShape position={[0, 3, -4]} color="#818cf8" scale={1.3} />

        {/* subtle ring (space feel) */}
        <Float speed={0.8} floatIntensity={1}>
          <Torus args={[1.6, 0.04, 16, 100]} position={[2, 2, -5]}>
            <meshStandardMaterial
              color="#60a5fa"
              opacity={0.12}
              transparent
            />
          </Torus>
        </Float>
      </Canvas>
    </div>
  );
}
