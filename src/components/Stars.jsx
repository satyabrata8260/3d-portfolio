import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function StarPoints() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#fde68a"
        size={0.08}
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Stars() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarPoints />
    </Canvas>
  );
}
