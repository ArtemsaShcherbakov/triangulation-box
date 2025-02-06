import { useCallback, useState, lazy, Suspense } from 'react';
import { AxiosError } from 'axios';
import { Box, Snackbar, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BoxForm from '../../components/BoxForm';
import { getCalculatedBox } from '../../service';
import { SizeBoxType } from '../../types';
import {
  INIT_STATE_SIZE_BOX,
  ERORRS_SERVER,
  SNACKBAR_POSITION,
  TIME_AUTO_HIDE_SNACKBAR,
  SIZE_LOADER,
} from './constants';
import styles from './style';

const BoxScene = lazy(() => import('../../components/BoxScene'));

const Main: React.FC = () => {
  const theme = useTheme();

  const [vertices, setVertices] = useState<number[]>([]);
  const [sizeBox, setSizeBox] = useState<SizeBoxType>(INIT_STATE_SIZE_BOX);
  const [errorReuire, setErrorReuire] = useState<string>('');

  const isNotEmptyVertices = vertices.length > 0;

  const calculatedBox = async () => {
    try {
      const response = await getCalculatedBox(sizeBox);

      setVertices(response.data);
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error_message: string }>;
      const errorText =
        axiosError.response?.data?.error_message ||
        axiosError.message ||
        ERORRS_SERVER.unknownError;

      setErrorReuire(errorText);
    }
  };

  const handleInputData = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      const nameField = event.target.name;

      setSizeBox({ ...sizeBox, [nameField]: value });
    },
    [sizeBox],
  );

  const handleClose = () => {
    setErrorReuire('');
  };

  return (
    <Box sx={styles(theme).mainPage}>
      <BoxForm
        sizeBox={sizeBox}
        handleInputData={handleInputData}
        calculatedBox={calculatedBox}
      />
      <Box sx={styles(theme).viewPanel}>
        {isNotEmptyVertices && (
          <Suspense
            fallback={
              <CircularProgress size={SIZE_LOADER} sx={styles(theme).loader} />
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
