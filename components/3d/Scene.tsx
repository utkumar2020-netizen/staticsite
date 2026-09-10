'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, type = 'sphere', color, size = 1.2 }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });

  const geometry = useMemo(() => {
    switch(type) {
      case 'sphere':
        return <sphereGeometry args={[size * 0.6, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'torus':
        return <torusGeometry args={[size * 0.5, size * 0.2, 16, 32]} />;
      default:
        return <sphereGeometry args={[size * 0.6, 32, 32]} />;
    }
  }, [type, size]);

  return (
    <Float
      speed={2.5}
      rotationIntensity={0.5}
      floatIntensity={1}
      position={position}
    >
      <mesh ref={meshRef}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={0.5}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function ParticleSystem() {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0ea5e9"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0a']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={0.3} />

        <Environment preset="city" />

        <ParticleSystem />

        <FloatingShape position={[-3, 1.5, 0]} type="sphere" color="#0ea5e9" size={1.5} />
        <FloatingShape position={[3, -1, -2]} type="box" color="#6366f1" size={1.2} />
        <FloatingShape position={[0, 2.5, 1]} type="torus" color="#f472b6" size={1} />
        <FloatingShape position={[-2, -2, -1]} type="sphere" color="#8b5cf6" size={0.8} />
        <FloatingShape position={[2.5, 0.5, 0.5]} type="box" color="#22d3ee" size={0.9} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.5}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;