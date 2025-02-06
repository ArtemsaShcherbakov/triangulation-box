import { useMemo, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { NUMBER_VERTEX_COORDINATES } from '../constants';
import IAdaptiveCameraProps from './interface';

const AdaptiveCamera: React.FC<IAdaptiveCameraProps> = ({ vertices }) => {
  const { camera } = useThree();

  const boundingBox = useMemo(() => {
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

      const distance = maxSize * 2;

      camera.position.set(center.x, center.y, center.z + distance);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [boundingBox, camera]);

  return null;
};

export default AdaptiveCamera;
