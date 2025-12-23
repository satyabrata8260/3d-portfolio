import { useFrame } from "@react-three/fiber";
import { Ring, Torus } from "@react-three/drei";
import { useRef } from "react";

function GlowRing({ position, size, speed }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.elapsedTime * speed;
    ref.current.rotation.x = clock.elapsedTime * speed * 0.3;
  });

  return (
    <Ring ref={ref} args={[size, size + 0.05, 64]} position={position}>
      <meshStandardMaterial
        color="#eab308"
        emissive="#eab308"
        emissiveIntensity={0.8}
        transparent
        opacity={0.35}
      />
    </Ring>
  );
}

function EnergyWave({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.scale.setScalar(1 + Math.sin(clock.elapsedTime) * 0.05);
  });

  return (
    <Torus ref={ref} args={[1.4, 0.02, 16, 100]} position={position}>
      <meshStandardMaterial
        color="#fde68a"
        emissive="#fde68a"
        emissiveIntensity={0.6}
        transparent
        opacity={0.25}
      />
    </Torus>
  );
}

export default function HologramAura() {
  return (
    <group position={[0, -1.2, -0.6]}>
      <GlowRing position={[0, 0.8, 0]} size={1.1} speed={0.15} />
      <GlowRing position={[0, 1.2, 0]} size={1.4} speed={-0.12} />
      <GlowRing position={[0, 1.6, 0]} size={1.8} speed={0.1} />

      <EnergyWave position={[0, 0.5, 0]} />
    </group>
  );
}
