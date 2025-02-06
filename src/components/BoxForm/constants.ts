import { IInputList } from './interface';

export const INIT_STATE_ERRORS = {
  height: '',
  width: '',
  length: '',
};

export const ERROR_MESSAGES = {
  fieldVoid: 'Это поле обязательно к заполнению',
  notPositiveNumber: 'Должно быть положительное число',
  tooLarge: 'дохуя',
};

export const INPUTS_LIST: IInputList[] = [
  {
    lable: 'Height:',
    type: 'number',
    name: 'height',
  },
  {
    lable: 'Width:',
    type: 'number',
    name: 'width',
  },
  {
    lable: 'Length:',
    type: 'number',
    name: 'length',
  },
];

export const MAX_SIZE_SIDE = 1000;
