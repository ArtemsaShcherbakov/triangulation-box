const convertToString = <T>(value: T): string => {
  if (value == null) {
    return '';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
};

export default convertToString;
