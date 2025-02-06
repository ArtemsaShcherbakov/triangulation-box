import { SnackbarOrigin } from '@mui/material';

export const ERRORS_SERVER = {
  unknownError: 'An unknown error occurred',
} as const;

export const SNACKBAR_POSITION: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center',
};

export const TIME_AUTO_HIDE_SNACKBAR = 3000;

export const INIT_STATE_SIZE_BOX = {
  height: 0,
  width: 0,
  length: 0,
};

export const SIZE_LOADER = 100;

export const INIT_STATE_ERRORS = {
  height: '',
  width: '',
  length: '',
};
