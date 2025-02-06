import { memo, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@mui/material/styles';
import * as THREE from 'three';
import AdaptiveCamera from './AdaptiveCamera';
import {
  CAMERA_SETTINGS,
  LIGHT_INTENSITY,
  DIRECTIONAL_LIGHT_POSITION,
  NUMBER_VERTEX_COORDINATES,
} from './constants';
import IBoxSceneProps from './interface';

const BoxScene: React.FC<IBoxSceneProps> = memo(({ vertices }) => {
  const theme = useTheme();

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();

    geom.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array(vertices),
        NUMBER_VERTEX_COORDINATES,
      ),
    );
    geom.computeVertexNormals();

    return geom;
  }, [vertices]);

  return (
    <Canvas camera={CAMERA_SETTINGS}>
      <ambientLight intensity={LIGHT_INTENSITY} />
      <directionalLight position={DIRECTIONAL_LIGHT_POSITION} />
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color={theme.palette.box}
          attach="material"
          side={THREE.DoubleSide}
        />
      </mesh>
      <OrbitControls />
      <AdaptiveCamera vertices={vertices} />
    </Canvas>
  );
});

BoxScene.displayName = 'BoxScene';

export default BoxScene;
