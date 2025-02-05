import { darkPalette, lightPalette } from '../palettes';

const getPalette = (mode: string) => ({
  palette: mode === 'dark' ? darkPalette : lightPalette,
});

export default getPalette;
