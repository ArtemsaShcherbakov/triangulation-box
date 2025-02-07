import isNumber from '../helpers/is-number';
import isNonNegativeNumber from './is-non-negative-number';
import isGreaterThanMax from './is-greater-than-max';
import { ERROR_MESSAGES, MAX_SIZE_VALUE } from '../constants';

const validateInput = (value: number): string => {
  if (!isNumber(value)) {
    return ERROR_MESSAGES.NOT_NUMBER;
  }

  if (isNonNegativeNumber(value)) {
    return ERROR_MESSAGES.NOT_POSITIVE_NUMBER;
  }

  if (isGreaterThanMax(value, MAX_SIZE_VALUE)) {
    return ERROR_MESSAGES.TOO_LARGE;
  }

  return '';
};

export default validateInput;
