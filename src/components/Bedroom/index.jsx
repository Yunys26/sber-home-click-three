import React from 'react';
import PropTypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three'
// import huyznaet from '../'

const Bedroom = () => {

    // const wall = useLoader(THREE.TextureLoader, huyznaet)
    // const wall = new THREE.TextureLoader()
    return (
        <React.Fragment>
            <group>
                <mesh rotation={[Math.PI / 1, 0, 0]} position={[34, 0, -2.1]} >
                    <boxBufferGeometry attach="geometry" args={[40, 18.9, 3]} />
                    <meshStandardMaterial attach="material" color="pink"/> 
                </mesh>
                <mesh rotation={[Math.PI / 1, 0, 0]} position={[34, 0, -2.1]} >
                    <boxBufferGeometry attach="geometry" args={[40, 18.9, 3]} />
                    <meshStandardMaterial attach="material"  color="pink"/> 
                </mesh>
                <mesh rotation={[Math.PI / 2, 1.57, 0]} position={[55.4, 0, 15]}>
                    <boxBufferGeometry attach="geometry" args={[18.9, 37.2, 3]} />
                    <meshBasicMaterial attach="material" color="pink"/>
                </mesh>
            </group>
        </React.Fragment>
    );
};


Bedroom.propTypes = {

};


export default Bedroom;
