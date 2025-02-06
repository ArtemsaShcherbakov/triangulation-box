import { memo, useMemo, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@mui/material/styles';
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

const AdaptiveCamera: React.FC<{ vertices: number[] }> = ({ vertices }) => {
  const { camera } = useThree();
  const boundingBox = useMemo(() => {
    if (vertices.length === 0) return null;

    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array(vertices),
        NUMBER_VERTEX_COORDINATES,
      ),
    );
    geom.computeBoundingBox();

    return geom.boundingBox;
  }, [vertices]);

  useEffect(() => {
    if (boundingBox) {
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const maxSize = Math.max(size.x, size.y, size.z);

      // Расстояние от камеры до объекта с учетом его размеров
      const distance = maxSize * 2;

      camera.position.set(center.x, center.y, center.z + distance);
      camera.lookAt(center);
    }
  }, [boundingBox, camera]);

  return null;
};

const BoxScene: React.FC<IBoxSceneProps> = memo(({ vertices }) => {
  const theme = useTheme();

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();

    if (vertices.length > 0) {
      geom.setAttribute(
        'position',
        new THREE.BufferAttribute(
          new Float32Array(vertices),
          NUMBER_VERTEX_COORDINATES,
        ),
      );
      geom.computeVertexNormals();
    }

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
