import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Apple(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/apple.glb");
  const { actions } = useAnimations(animations, group);

  // Rotasi objek agar menghadap ke depan (optional)
  scene.rotation.y = Math.PI;

  // Target posisi Y dari props
  const targetPos = props.position || [0, 0, 0];

  // STATE: animasi naik dan skala masuk
  const [yPos, setYPos] = useState(-8);
  const [scaleFactor, setScaleFactor] = useState(0);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 🌊 Idle rotasi Y ditambahkan ke rotasi awal (jika ada)
    const baseRotationY = props.rotation?.[1] || 0;
    group.current.rotation.y = baseRotationY + Math.sin(t * 0.2) * (Math.PI / 6);

    // 🧱 Animasi skala masuk
    if (scaleFactor < 1) {
      const next = Math.min(1, scaleFactor + delta * 4);
      setScaleFactor(next);
      group.current.scale.setScalar(next * (props.scale || 1));
    }

    // 🧱 Gerakan dari bawah ke posisi target
    if (yPos < targetPos[1]) {
      const newY = Math.min(targetPos[1], yPos + delta * 4);
      setYPos(newY);
    }

    // Tetapkan posisi final (X dan Z tetap, Y animasi)
    group.current.position.set(targetPos[0], yPos, targetPos[2]);
  });

  return (
    <group ref={group} dispose={null} {...props}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/apple.glb");