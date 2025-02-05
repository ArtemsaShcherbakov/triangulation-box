import { Theme } from '@mui/material/styles';

const styles = (theme: Theme) => ({
  mainPage: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
  },

  viewPanel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '100%',
    background: theme.palette.secondary.main,
  },
});

export default styles;
