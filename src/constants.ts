export const MAX_SIZE_VALUE = 1000;

export const ERROR_MESSAGES = {
  FIELD_VOID: 'Field cannot be empty',
  NOT_NUMBER: 'Please enter a numeric value',
  NOT_POSITIVE_NUMBER: 'Number must be greater than zero',
  TOO_LARGE: `Maximum allowed value: ${MAX_SIZE_VALUE}`,
} as const;
