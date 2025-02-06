import { ThreeElements } from '@react-three/fiber';
import { INIT_STATE_SIZE_BOX, INIT_STATE_ERRORS } from './pages/Main/constants';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

export type SizeBoxType = typeof INIT_STATE_SIZE_BOX;

export type ErrorValidationType = typeof INIT_STATE_ERRORS;
