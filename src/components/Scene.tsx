'use client'

import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"

function NotebookModel() {
  const { scene } = useGLTF("/Lowpoly_Notebook_3.glb")
  return <primitive object={scene} />
}

export default function Scene() {
  return (
    <div className="md:w-[600px] md:h-[600px] w-screen h-[400px] mx-auto">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[-5, 2, 3]} />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={1.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <NotebookModel />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}