import { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomInput from '../UI/CustomInput';
import { SizeBoxType, ErrorsType } from './types';
import {
  INIT_STATE_SIZE_BOX,
  INIT_STATE_ERRORS,
  INPUTS_LIST,
  ERROR_MESSAGES,
} from './constants';

import styles from './style';

const BoxForm: React.FC = () => {
  const [sizeBox, setSizeBox] = useState<SizeBoxType>(INIT_STATE_SIZE_BOX);
  const [errors, setErrors] = useState<ErrorsType>(INIT_STATE_ERRORS);

  const validateInput = (value: number): string => {
    if (!value) {
      return ERROR_MESSAGES.fieldVoid;
    }

    if (isNaN(value) || value <= 0) {
      return ERROR_MESSAGES.notPositiveNumber;
    }

    return '';
  };

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const nameField = event.target.name;

    setSizeBox({ ...sizeBox, [nameField]: value });
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
      console.log('Valid data:', sizeBox); // test implementation
    }
  };

  return (
    <Box sx={styles.container}>
      {INPUTS_LIST.map((dataInput, index) => (
        <Box key={index} sx={styles.inputContainer}>
          <CustomInput
            key={index}
            nameInput={dataInput.name}
            valueInput={sizeBox[dataInput.name as keyof SizeBoxType].toString()}
            onChange={handleInputData}
            labelText={dataInput.lable}
            typeInput={dataInput.type}
            styleLable={styles.label}
            styleInput={styles.textField}
            error={errors[dataInput.name]}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        sx={styles.buttonCalculate}
        onClick={handleCalculateBox}
      >
        Calculate
      </Button>
    </Box>
  );
};

export default BoxForm;
