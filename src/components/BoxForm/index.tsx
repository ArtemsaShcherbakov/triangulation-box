import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomInput from '../UI/CustomInput';
import ChangeThemeButton from '../ChangeThemeButton';
import convertToString from '../../helpers/convert-to-string';
import isNumber from '../../helpers/is-number';
import nonNegativeNumber from '../../helpers/non-negative-number';
import isValueGreaterThanMaxSize from '../../helpers/is-value-greater-than-max-size';
import { ErrorsType } from './types';
import {
  INIT_STATE_ERRORS,
  INPUTS_LIST,
  ERROR_MESSAGES,
  MAX_SIZE_VALUE,
} from './constants';
import IBoxFormProps from './interface';
import styles from './style';

const BoxForm: React.FC<IBoxFormProps> = ({
  sizeBox,
  handleInputData,
  calculatedBox,
}) => {
  const theme = useTheme();
  const styleds = styles(theme);

  const [errors, setErrors] = useState<ErrorsType>(INIT_STATE_ERRORS);

  const validateInput = (value: number): string => {
    if (!isNumber(value)) return ERROR_MESSAGES.NOT_NUMBER;
    if (nonNegativeNumber(value)) return ERROR_MESSAGES.NOT_POSITIVE_NUMBER;
    if (isValueGreaterThanMaxSize(value, MAX_SIZE_VALUE))
      return ERROR_MESSAGES.TOO_LARGE;

    return '';
  };

  const validateData = (): boolean => {
    let isValid = true;
    const newErrors: ErrorsType = { ...INIT_STATE_ERRORS };

    Object.entries(sizeBox).forEach(([key, value]) => {
      const errorMessage = validateInput(value);

      if (errorMessage) {
        isValid = false;
      }

      newErrors[key as keyof ErrorsType] = errorMessage;
    });

    setErrors(newErrors);

    return isValid;
  };

  const handleCalculateBox = () => {
    if (validateData()) {
      calculatedBox();
    }
  };

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
            error={errors[dataInput.name]}
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
