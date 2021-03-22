import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Box, OrbitControls, Sky } from '@react-three/drei'
import './App.css';
import BigRoom from './components/BigRoom';

// const SpinningMesh = ({ position, args, color }) => {
//   // Создаем ref чтобы получить ссылку на сетку
//   const mesh = React.useRef(null);

//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

//   return (
//     <mesh castShadow position={position} ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       {/* <circleBufferGeometry attach="geometry" args={[2, 1, 6]} /> */}
//       <meshStandardMaterial attach="material" color={color}/>
//     </mesh>
//   )
// }

// const App = () => {
//   return (
//     <React.Fragment>
//       <Canvas
//         shadowMap
//         colorManagement 
//         camera={{position: [-5, 2, 10], fov: 60}}
//       >
//         {/* Глобальное освещение всех объектов */}
//         <ambientLight intensity={0.3}/>
//         {/* Направленный свет типа солнечного */}
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={1}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={50}
//           shadow-camera-right={50}
//           shadow-camera-top={50}
//           shadow-camera-bottom={50}
//         />
//         {/* Точечное освещение */}
//         <pointLight position={[-10, 0, -20]} intensity={0.5}/>
//         <pointLight position={[0, -10, 0]} intensity={1.5}/>
//         <group>
//           <mesh
//             receiveShadow
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0,-3, 0]}
//           >
//             <planeBufferGeometry attach="geometry" args={[100, 100]}/>
//             <shadowMaterial attach="material" opacity={0.3} color="dark"/>
//           </mesh>
//         </group>
//         <SpinningMesh position={[0, 1, 0]} args={[10, 1, 1]} color="lightblue"/>
//         <SpinningMesh position={[-3, 1, -5]} color="pink"/>
//         <SpinningMesh position={[5, 1, -1]} color="pink"/>
//         <OrbitControls />
//       </Canvas>
//     </React.Fragment>
// ) }

const App = () => {
  return (
    <React.Fragment>
      <Canvas
        shadowMap
        colorManagement
      >
        <BigRoom />


        <OrbitControls />
      </Canvas>
    </React.Fragment>
  )
}

export default App;
