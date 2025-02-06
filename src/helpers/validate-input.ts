import isNumber from '../helpers/is-number';
import nonNegativeNumber from '../helpers/non-negative-number';
import isValueGreaterThanMaxSize from '../helpers/is-value-greater-than-max-size';
import { ERROR_MESSAGES } from '../constants';

const validateInput = (value: number): string => {
  if (!isNumber(value)) return ERROR_MESSAGES.NOT_NUMBER;
  if (nonNegativeNumber(value)) return ERROR_MESSAGES.NOT_POSITIVE_NUMBER;
  if (isValueGreaterThanMaxSize(value, 1000)) return ERROR_MESSAGES.TOO_LARGE;

  return '';
};

export default validateInput;
