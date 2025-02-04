import { Box, Checkbox } from '@mui/material';
import IChangeThemeButtonProps from './interface';
import { StyledChangeThemeButton, StyledSlider } from './style';

const ChangeThemeButton: React.FC<IChangeThemeButtonProps> = ({
  checked,
  handlerSwitch,
}) => (
  <Box component="label" sx={StyledChangeThemeButton}>
    <Checkbox checked={checked} onChange={handlerSwitch} />
    <Box sx={StyledSlider(checked)} />
  </Box>
);

export default ChangeThemeButton;
