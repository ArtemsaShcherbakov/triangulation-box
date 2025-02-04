import { SizeBoxType } from './types';

export interface IInputList {
  lable: string;
  type: string;
  name: keyof SizeBoxType;
}
