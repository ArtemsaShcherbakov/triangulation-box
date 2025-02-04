import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  CAMERA_SETTINGS,
  LIGHT_INTENSITY,
  DIRECTIONAL_LIGHT_POSITION,
  NUMBER_VERTEX_COORDINATES,
} from './constants';

interface IBoxSceneProps {
  vertices: number[];
}

const BoxScene: React.FC<IBoxSceneProps> = ({ vertices }) => {
  const verticesArray = new Float32Array(vertices);
  const numberVertices: number = vertices.length / 3;

  return (
    <Canvas camera={CAMERA_SETTINGS}>
      <ambientLight intensity={LIGHT_INTENSITY} />
      <directionalLight position={DIRECTIONAL_LIGHT_POSITION} />
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={verticesArray}
            count={numberVertices}
            itemSize={NUMBER_VERTEX_COORDINATES}
          />
        </bufferGeometry>
        <meshStandardMaterial color="orange" attach="background" wireframe />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};
export default BoxScene;
