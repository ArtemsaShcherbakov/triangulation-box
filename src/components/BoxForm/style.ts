import { Theme } from '@mui/material/styles';

const styles = (theme: Theme) => ({
  container: {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '25px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '90%',
  },

  label: {
    width: '80px',
    color: theme.palette.primary.contrastText,
  },

  textField: {
    width: '100%',

    '& .MuiOutlinedInput-input': {
      height: '1px',
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: '4px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: theme.palette.border.main },
      '&:hover fieldset': { borderColor: theme.palette.border.hover },
      '&.Mui-focused fieldset': { borderColor: theme.palette.border.main },
    },
    '& .MuiOutlinedInput-root.Mui-error': {
      '& fieldset': {
        borderWidth: '2px',
      },
    },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      bottom: '-20px',
      left: '0',
      fontSize: '12px',
      color: 'red',
    },
  },

  buttonCalculate: {
    width: '120px',
    height: '40px',
    backgroundColor: theme.palette.button.colorBackground,
    textTransform: 'none',
    color: theme.palette.button.colorText,

    '&:hover': {
      backgroundColor: theme.palette.button.colorHover,
    },
  },
});

export default styles;
