import { SizeBoxType } from '../../types';

export interface IInputList {
  lable: string;
  type: string;
  name: keyof SizeBoxType;
}

interface IBoxFormProps {
  sizeBox: SizeBoxType;
  handleInputData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  calculatedBox: () => void;
}

export default IBoxFormProps;
