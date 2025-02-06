import { useState, useContext } from 'react';
import { Box, Checkbox } from '@mui/material';
import { Context } from '../../context/context';
import { styledChangeThemeButton, styledSlider } from './style';

const ChangeThemeButton: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleMode = useContext(Context);

  const toggleTheme = () => {
    toggleMode();
    setChecked(!checked);
  };

  return (
    <Box component="label" sx={styledChangeThemeButton}>
      <Checkbox checked={checked} onChange={toggleTheme} />
      <Box sx={styledSlider(checked)} />
    </Box>
  );
};

export default ChangeThemeButton;
