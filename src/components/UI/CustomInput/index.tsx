import { SxProps, TextField, Typography } from '@mui/material';

interface ICustomInputProps {
  nameInput: string;
  labelText: string;
  typeInput: string;
  valueInput: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styleInput: SxProps;
  styleLable: SxProps;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  nameInput,
  labelText,
  typeInput,
  valueInput,
  onChange,
  error,
  styleInput,
  styleLable,
}) => (
  <>
    <Typography sx={styleLable}>{labelText}</Typography>
    <TextField
      type={typeInput}
      value={valueInput}
      sx={styleInput}
      name={nameInput}
      onChange={onChange}
      error={!!error}
      helperText={error}
    />
  </>
);

export default CustomInput;
