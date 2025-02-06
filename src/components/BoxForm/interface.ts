import { SizeBoxType } from '../../types';
import { ErrorValidationType } from '../../types';

export interface IInputList {
  lable: string;
  type: string;
  name: keyof SizeBoxType;
}

interface IBoxFormProps {
  sizeBox: SizeBoxType;
  handleInputData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  calculatedBox: () => void;
  errorValidation: ErrorValidationType;
  setErrorValidationInput: (newError: ErrorValidationType) => void;
}

export default IBoxFormProps;
