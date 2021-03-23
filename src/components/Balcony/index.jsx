import React from 'react';
import PropTypes from 'prop-types';


const Balcony = () => {

    return (
        <React.Fragment>
            <group>
                <mesh rotation={[Math.PI / 1, 0, 0]} position={[-22, 0, 6.9]}>
                    <boxBufferGeometry attach="geometry" args={[3, 18.9, 15]} />
                    <meshStandardMaterial attach="material" color=""/>
                </mesh>
                <mesh rotation={[Math.PI / 1, 0, 0]} position={[-23, 0, -8]}>
                    <boxBufferGeometry attach="geometry" args={[1, 18.9, 17]} />
                    <meshStandardMaterial attach="material" color=""/>
                </mesh>
                <mesh rotation={[Math.PI / 1, 1.57, 0]} position={[-8, 0, -16]}>
                    <boxBufferGeometry attach="geometry" args={[1, 18.9, 30]} />
                    <meshStandardMaterial attach="material" color=""/>
                </mesh>
            </group>
        </React.Fragment>
    );
};


Balcony.propTypes = {
 
};


export default Balcony;
