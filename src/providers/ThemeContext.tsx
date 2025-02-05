import { PropsWithChildren, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Context } from '../context/context';
import getPalette from '../helpers/get-palette';

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setModes] = useState<string>('light');
  const theme = createTheme(getPalette(mode));

  const toggleMode = () => {
    setModes(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={toggleMode}>{children}</Context.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
