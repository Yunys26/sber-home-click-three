import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'

import { Box, OrbitControls, Sky } from '@react-three/drei'

function MainRoom() {
  const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
  const cubeCamera = useRef()

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene)
  })

  return (
    <>
      <Sky layers={[11]} sunPosition={[Math.PI, 0, Math.PI / 2]} turbidity={8} rayleigh={6} mieCoefficient={0.0005} mieDirectionalG={0.8} />
      <cubeCamera layers={[11]} name="cubeCamera" ref={cubeCamera} position={[0, 0, 0]} args={[0.1, 100, renderTarget]} />
      
      <Box args={[2, 2, 2]}>
          
        <meshPhysicalMaterial color="#f51d63" envMap={renderTarget.texture} metalness={1} roughness={0} />
      </Box>
      {/* Камера которая позволяет крутить вокруг обхекта */}
      <OrbitControls />
      {/*  */}
      <ambientLight />
    </>
  )
}

function Container(props) {
    // const mesh = React.useRef(null);
    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <React.Fragment>
            <Canvas colorManagement>
                <MainRoom />
            </Canvas>
        </React.Fragment>
    )
}

Container.propTypes = {

}

export default Container

