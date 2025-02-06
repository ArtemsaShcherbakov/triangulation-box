import { AxiosResponse } from 'axios';
import { post } from '../http';
import { SizeBoxType } from '../types';

export const getCalculatedBox = (
  sizeBox: SizeBoxType,
): Promise<AxiosResponse<number[]>> => post('/triangulate', sizeBox);
