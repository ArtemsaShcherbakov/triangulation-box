import { Vector3 } from '@react-three/fiber';

const cameraPosition: Vector3 = [0, 0, 5];

export const CAMERA_SETTINGS = {
  position: cameraPosition,
  fov: 75,
  near: 0.1,
  far: 10000,
};

export const LIGHT_INTENSITY = 0.5;

export const DIRECTIONAL_LIGHT_POSITION: Vector3 = [5, 5, 5];

export const NUMBER_VERTEX_COORDINATES = 3;
