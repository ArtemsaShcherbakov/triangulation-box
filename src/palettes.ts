import { PaletteMode } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      main: string;
      hover: string;
    };
    loading: {
      pending: string;
    };
    button: {
      colorText: string;
      colorBackground: string;
      colorHover: string;
    };
    box: string;
  }

  interface PaletteOptions {
    border?: {
      main: string;
      hover: string;
    };
    loading: {
      pending: string;
    };
    button?: {
      colorText: string;
      colorBackground: string;
      colorHover: string;
    };
  }
}
//light: '#ede3e3',
const darkPalette = {
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#000',
    light: '#121212',
    contrastText: '#fff',
  },
  secondary: {
    main: '#767272',
  },
  border: {
    main: '#fff',
    hover: '#aaa',
  },
  loading: {
    pending: '#e5e5e5',
  },
  button: {
    colorText: '#fff',
    colorBackground: '#666',
    colorHover: '#555',
  },
  box: '#ede3e3',
};

const lightPalette = {
  mode: 'light' as PaletteMode,
  primary: {
    main: '#fff',
    light: '#e5e5e5',
    contrastText: '#000',
  },
  secondary: {
    main: '#e5e5e5',
  },
  border: {
    main: '#aaa',
    hover: '#928f8f',
  },
  loading: {
    pending: '#0b3d91',
  },
  button: {
    colorText: '#f8f6f6',
    colorBackground: '#c4c4c4',
    colorHover: '#c5c5c5',
  },
  box: '#e5e5e5',
};

export { darkPalette, lightPalette };
