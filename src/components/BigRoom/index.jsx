import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three'



const BigRoom = () => {
    return (
        <React.Fragment>
            <group>
                <mesh rotation={[Math.PI / 2, 3.15, 0]} position={[-0.3, -9, 18]}>
                    <planeGeometry attach="geometry" args={[37, 37]} />
                    <meshBasicMaterial side={THREE.DoubleSide} attach="material" color="green" />
                </mesh>
                <mesh>
                    <boxBufferGeometry attach="geometry" args={[37.2, 18.9, 1]} />
                    <meshBasicMaterial attach="material" color="pink" />
                </mesh>
                <mesh rotation={[Math.PI / 2, 1.57, 0]} position={[-19.1, 0, 18]}>
                    <boxBufferGeometry attach="geometry" args={[18.9, 37.2, 1]} />
                    <meshBasicMaterial attach="material" color="pink" />
                </mesh>
                <mesh rotation={[Math.PI / 1, 1.57, 0]} position={[-1, 0, 37.1]}>
                    <boxBufferGeometry attach="geometry" args={[1, 18.9, 37.2]} />
                    <meshBasicMaterial attach="material" color="pink" />
                </mesh>
                <mesh rotation={[Math.PI / 2, 1.57, 0]} position={[18.1, 0, 19]}>
                    <boxBufferGeometry attach="geometry" args={[18.9, 37.2, 1]} />
                    <meshBasicMaterial attach="material" color="pink" />
                </mesh>
            </group>
        </React.Fragment>
    );
};


BigRoom.propTypes = {

};


export default BigRoom;
