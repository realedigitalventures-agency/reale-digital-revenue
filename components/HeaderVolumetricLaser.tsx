"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeaderVolumetricLaser = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const { width, height } = canvas.getBoundingClientRect();
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000002);

    const camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    scene.fog = new THREE.Fog(0x000002, 5, 30);

    const geometry = new THREE.PlaneGeometry(15, 15, 32, 32);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uFogColor: { value: new THREE.Color(0x000002) },
        uTintColor: { value: new THREE.Color(0x00e0b0) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uFogColor;
        uniform vec3 uTintColor;
        varying vec2 vUv;
        varying vec3 vPos;

        void main() {
          float t = uTime * 0.2;
          float x = vUv.x * 8.0 + t;
          float n = sin(x) * 0.5 + 0.5;
          float bright = smoothstep(0.4, 0.8, n) * 0.8;

          vec3 color = uTintColor * bright;

          float fogFactor = smoothstep(1.0, 3.0, length(vPos) * 0.5);
          color = mix(color, uFogColor, fogFactor);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    let time = 0;
    let frameId: number;

    const animate = () => {
      time += 0.01;
      material.uniforms.uTime.value = time;

      plane.position.z = 0.1 * Math.sin(time * 0.4);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <header className="relative w-full h-80 lg:h-[50vh] overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center px-6">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            AI Growth Systems That Turn Visibility Into Revenue
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Reale Digital builds AI search visibility, conversion-focused
            pages, and automation systems that generate booked calls —
            without adding headcount.
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderVolumetricLaser;
