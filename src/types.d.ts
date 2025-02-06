import { ThreeElements } from '@react-three/fiber';
import { INIT_STATE_SIZE_BOX } from './pages/Main/constants';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

export type SizeBoxType = typeof INIT_STATE_SIZE_BOX;
