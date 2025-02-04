const styles = {
  container: {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '25px',
    backgroundColor: '#000',
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
      '& fieldset': { borderColor: '#fff' },
      '&:hover fieldset': { borderColor: '#ccc' },
      '&.Mui-focused fieldset': { borderColor: '#fff' },
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
    backgroundColor: '#666',
    textTransform: 'none',
    color: '#fff',

    '&:hover': {
      backgroundColor: '#555',
    },
  },
};

export default styles;
