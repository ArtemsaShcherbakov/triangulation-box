import { IInputList } from './interface';

export const INIT_STATE_SIZE_BOX = {
  height: 0,
  width: 0,
  length: 0,
};

export const INIT_STATE_ERRORS = {
  height: '',
  width: '',
  length: '',
};

export const ERROR_MESSAGES = {
  fieldVoid: 'Это поле обязательно к заполнению',
  notPositiveNumber: 'Должно быть положительное число',
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
