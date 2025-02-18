'use client'

import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function NotebookModel() {
  const { scene } = useGLTF("/Lowpoly_Notebook_3.glb")
  return <primitive object={scene} />
}

function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-12 h-12 border-4 border-t-4 border-white rounded-full animate-spin"></div>
    </div>
  )
}

export default function Scene() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="md:w-[600px] md:h-[600px] w-screen h-[400px] mx-auto relative">
      {isLoading && <Loader />}
      <Canvas 
        onCreated={({ gl }) => {
          setIsLoading(false)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputColorSpace = THREE.SRGBColorSpace
        }}
        gl={{
          antialias: true,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[-5, 2, 3]} />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15}
            penumbra={1} 
            intensity={1}
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <NotebookModel />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload("/Lowpoly_Notebook_3.glb")