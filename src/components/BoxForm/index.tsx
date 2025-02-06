import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomInput from '../UI/CustomInput';
import ChangeThemeButton from '../ChangeThemeButton';
import convertToString from '../../helpers/convert-to-string';
import validateInput from '../..//helpers/validate-input';
import { ErrorValidationType } from '../../types';
import { INPUTS_LIST } from './constants';
import { INIT_STATE_ERRORS } from '../../pages/Main/constants';
import IBoxFormProps from './interface';
import styles from './style';

const BoxForm: React.FC<IBoxFormProps> = ({
  sizeBox,
  handleInputData,
  calculatedBox,
  errorValidation,
  setErrorValidationInput,
}) => {
  const theme = useTheme();
  const styleds = styles(theme);

  const validateData = (): boolean => {
    let isValid = true;
    const newErrors: ErrorValidationType = { ...INIT_STATE_ERRORS };

    Object.entries(sizeBox).forEach(([key, value]) => {
      const errorMessage = validateInput(value);

      if (errorMessage) {
        isValid = false;
      }

      newErrors[key as keyof ErrorValidationType] = errorMessage;
    });

    setErrorValidationInput(newErrors);

    return isValid;
  };

  const handleCalculateBox = () => {
    if (validateData()) {
      calculatedBox();
    }
  };
  console.log('render');
  return (
    <Box sx={styleds.container}>
      {INPUTS_LIST.map((dataInput, index) => (
        <Box key={index} sx={styleds.inputContainer}>
          <CustomInput
            key={index}
            nameInput={dataInput.name}
            valueInput={convertToString(sizeBox[dataInput.name])}
            onChange={handleInputData}
            labelText={dataInput.lable}
            typeInput={dataInput.type}
            styleLable={styleds.label}
            styleInput={styleds.textField}
            error={errorValidation[dataInput.name]}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        sx={styleds.buttonCalculate}
        onClick={handleCalculateBox}
      >
        Calculate
      </Button>
      <ChangeThemeButton />
    </Box>
  );
};

export default BoxForm;
