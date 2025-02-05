import { useState, useContext } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Context } from '../../context/context';
import CustomInput from '../UI/CustomInput';
import ChangeThemeButton from '../UI/ChangeThemeButton';
import { SizeBoxType } from '../../types';
import { ErrorsType } from './types';
import {
  INIT_STATE_SIZE_BOX,
  INIT_STATE_ERRORS,
  INPUTS_LIST,
  ERROR_MESSAGES,
} from './constants';

import styles from './style';

interface IBoxFormProps {
  sizeBox: SizeBoxType;
  handleInputData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  calculatedBox: () => void;
}

const BoxForm: React.FC<IBoxFormProps> = ({
  sizeBox,
  handleInputData,
  calculatedBox,
}) => {
  const theme = useTheme();

  const [checked, setChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsType>(INIT_STATE_ERRORS);

  const toggleMode = useContext(Context);

  const validateInput = (value: number): string => {
    if (!value) {
      return ERROR_MESSAGES.fieldVoid;
    }

    if (isNaN(value) || value <= 0) {
      return ERROR_MESSAGES.notPositiveNumber;
    }

    return '';
  };

  const validateData = (): boolean => {
    let isValid = true;
    const newErrors: ErrorsType = { height: '', width: '', length: '' };

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

  const toggleTheme = () => {
    toggleMode();
    setChecked(!checked);
  };

  return (
    <Box sx={styles(theme).container}>
      {INPUTS_LIST.map((dataInput, index) => (
        <Box key={index} sx={styles(theme).inputContainer}>
          <CustomInput
            key={index}
            nameInput={dataInput.name}
            valueInput={sizeBox[dataInput.name as keyof SizeBoxType].toString()}
            onChange={handleInputData}
            labelText={dataInput.lable}
            typeInput={dataInput.type}
            styleLable={styles(theme).label}
            styleInput={styles(theme).textField}
            error={errors[dataInput.name]}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        sx={styles(theme).buttonCalculate}
        onClick={handleCalculateBox}
      >
        Calculate
      </Button>
      <ChangeThemeButton checked={checked} handlerSwitch={toggleTheme} />
    </Box>
  );
};

export default BoxForm;
