import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import './App.css';

const App = () => (

  <React.Fragment>
    {/* Создаем холст для взаимодействия */}
    <Canvas>
      {/* <mesh>
        <boxBufferGeometry attach="geometry" args={[2,2,2]} />
        <meshStandardMaterial attach="material"/>
      </mesh> */}
      <Box>
        <meshStandardMaterial attach="material"/>
      </Box>
    </Canvas>
  </React.Fragment>

) 

export default App;
