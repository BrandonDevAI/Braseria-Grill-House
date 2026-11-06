"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 900;

function makeSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,240,200,1)");
  g.addColorStop(0.25, "rgba(255,160,60,0.9)");
  g.addColorStop(0.6, "rgba(232,97,26,0.25)");
  g.addColorStop(1, "rgba(232,97,26,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function Embers() {
  const ref = useRef<THREE.Points>(null);
  const { positions, speeds, offsets, colors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const offsets = new Float32Array(COUNT);
    const palette = [new THREE.Color("#ffb347"), new THREE.Color("#ff8a3d"), new THREE.Color("#e8611a"), new THREE.Color("#ffd88a")];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.25 + Math.random() * 0.9;
      offsets[i] = Math.random() * Math.PI * 2;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors.set([c.r, c.g, c.b], i * 3);
    }
    return { positions, speeds, offsets, colors };
  }, []);
  const sprite = useMemo(() => makeSprite(), []);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      arr[i3 + 1] += speeds[i] * delta;
      arr[i3] += Math.sin(t * 0.8 + offsets[i]) * 0.004;
      if (arr[i3 + 1] > 6) {
        arr[i3 + 1] = -6;
        arr[i3] = (Math.random() - 0.5) * 16;
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
    // parallax suave con el puntero
    pts.rotation.y += (state.pointer.x * 0.15 - pts.rotation.y) * 0.03;
    pts.rotation.x += (-state.pointer.y * 0.08 - pts.rotation.x) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        map={sprite}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function EmberScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Embers />
    </Canvas>
  );
}
