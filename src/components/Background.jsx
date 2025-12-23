import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";

/* FLOATING SPHERE */
function FloatingSphere({ position, size }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.6;
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color="#60a5fa"
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

/* FLOATING RING (SPACE FEEL) */
function FloatingRing({ position }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.5, 0.05, 16, 100]} />
      <meshStandardMaterial
        color="#818cf8"
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function Background() {
  return (
    <div className="bg-layer">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* FLOATING OBJECTS */}
        <FloatingSphere position={[-4, 1, -3]} size={0.8} />
        <FloatingSphere position={[3, -1, -4]} size={1.1} />
        <FloatingSphere position={[0, 3, -5]} size={0.9} />
        <FloatingRing position={[2, 2, -6]} />
      </Canvas>
    </div>
  );
}
