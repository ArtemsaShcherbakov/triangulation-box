import { useMemo, useState, lazy, Suspense } from 'react';
import { AxiosError } from 'axios';
import { Box, Snackbar, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BoxForm from '../../components/BoxForm';
import validateInput from '../../helpers/validate-input';
import { getCalculatedBox } from '../../service';
import { SizeBoxType, ErrorValidationType } from '../../types';
import {
  INIT_STATE_SIZE_BOX,
  ERRORS_SERVER,
  SNACKBAR_POSITION,
  TIME_AUTO_HIDE_SNACKBAR,
  SIZE_LOADER,
  INIT_STATE_ERRORS,
} from './constants';
import styles from './style';

const BoxScene = lazy(() => import('../../components/BoxScene'));

const Main: React.FC = () => {
  const theme = useTheme();
  const styleds = styles(theme);

  const [vertices, setVertices] = useState<number[]>([]);
  const [sizeBox, setSizeBox] = useState<SizeBoxType>(INIT_STATE_SIZE_BOX);
  const [errorReuire, setErrorReuire] = useState<string>('');
  const [errorValidation, setErrorValidation] =
    useState<ErrorValidationType>(INIT_STATE_ERRORS);

  const isNotEmptyVertices = useMemo(() => vertices.length > 0, [vertices]);

  const calculatedBox = async () => {
    try {
      const response = await getCalculatedBox(sizeBox);

      setVertices(response.data);
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error_message: string }>;
      const errorText = axiosError.message || ERRORS_SERVER.unknownError;

      setErrorReuire(errorText);
    }
  };

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const nameField = event.target.name;

    setSizeBox({ ...sizeBox, [nameField]: value });

    const errorMessage = validateInput(value);

    setErrorValidation({ ...errorValidation, [nameField]: errorMessage });
  };

  const handleClose = () => {
    setErrorReuire('');
  };

  const setErrorValidationInput = (newErrors: ErrorValidationType) => {
    setErrorValidation(newErrors);
  };

  return (
    <Box sx={styleds.mainPage}>
      <BoxForm
        sizeBox={sizeBox}
        handleInputData={handleInputData}
        calculatedBox={calculatedBox}
        errorValidation={errorValidation}
        setErrorValidationInput={setErrorValidationInput}
      />
      <Box sx={styleds.viewPanel}>
        {isNotEmptyVertices && (
          <Suspense
            fallback={
              <CircularProgress size={SIZE_LOADER} sx={styleds.loader} />
            }
          >
            <BoxScene vertices={vertices} />
          </Suspense>
        )}
      </Box>
      <Snackbar
        anchorOrigin={SNACKBAR_POSITION}
        open={!!errorReuire}
        message={errorReuire}
        onClose={handleClose}
        autoHideDuration={TIME_AUTO_HIDE_SNACKBAR}
      />
    </Box>
  );
};

export default Main;
