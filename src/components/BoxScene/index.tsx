import { memo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import {
  CAMERA_SETTINGS,
  LIGHT_INTENSITY,
  DIRECTIONAL_LIGHT_POSITION,
  NUMBER_VERTEX_COORDINATES,
} from './constants';

interface IBoxSceneProps {
  vertices: number[];
}

const BoxScene: React.FC<IBoxSceneProps> = memo(({ vertices }) => {
  const verticesArray = new Float32Array(vertices);
  const numberVertices: number = vertices.length / 3;

  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (geometryRef.current) {
      if (geometryRef.current.getAttribute('position')) {
        geometryRef.current.deleteAttribute('position');
      }

      geometryRef.current.setAttribute(
        'position',
        new THREE.BufferAttribute(verticesArray, NUMBER_VERTEX_COORDINATES),
      );

      geometryRef.current.computeVertexNormals();
      geometryRef.current.attributes.position.needsUpdate = true;
    }
  }, [vertices]);

  console.log('render');
  return (
    <Canvas camera={CAMERA_SETTINGS}>
      <ambientLight intensity={LIGHT_INTENSITY} />
      <directionalLight position={DIRECTIONAL_LIGHT_POSITION} />
      <mesh>
        <bufferGeometry ref={geometryRef}>
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
});

BoxScene.displayName = 'BoxScene';

export default BoxScene;
