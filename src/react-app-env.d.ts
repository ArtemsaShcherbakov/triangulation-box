/// <reference types="react-scripts" />
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      mesh: any;
      bufferGeometry: any;
      bufferAttribute: any;
      meshStandardMaterial: any;
    }
  }
}
