import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber';
import ss from '../break.jpg'

const BigRoom = () => {

    const lods = useLoader(THREE.TextureLoader, ss);
    // const lod = new THREE.TextureLoader()
    // console.log(loader)
    return (
        <React.Fragment>
            <group>
                <mesh rotation={[Math.PI / 2, 3.15, 0]} position={[-0.3, -9, 18]}>
                    <planeGeometry attach="geometry" args={[37, 37]} />
                    <meshBasicMaterial map={lods} side={THREE.DoubleSide} attach="material"/>
                </mesh>
                <mesh rotation={[Math.PI / 1, 0, 0]} position={[0, 0, 0.4]}>
                    <boxBufferGeometry attach="geometry" args={[37.2, 18.9, 2]} />
                    <meshBasicMaterial map={lods} attach="material" color="pink"/>
                </mesh>
                <mesh rotation={[Math.PI / 2, 1.57, 0]} position={[-19.1, 0, 18]}>
                    <boxBufferGeometry attach="geometry" args={[18.9, 37.2, 3]} />
                    <meshBasicMaterial map={lods} attach="material" color="pink" />
                </mesh>
                <mesh rotation={[Math.PI / 1, 1.57, 0]} position={[-1, 0, 37.1]}>
                    <boxBufferGeometry attach="geometry" args={[1, 18.9, 37.2]} />
                    <meshBasicMaterial map={lods} attach="material" color="blue" />
                </mesh>
                <mesh rotation={[Math.PI / 2, 1.57, 0]} position={[18.1, 0, 19]}>
                    <boxBufferGeometry attach="geometry" args={[18.9, 37.2, 1]} />
                    <meshBasicMaterial map={lods} attach="material" color="blue" />
                </mesh>
            </group>
        </React.Fragment>
    );
};


BigRoom.propTypes = {

};


export default BigRoom;
