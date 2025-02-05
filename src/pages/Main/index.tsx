import { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import BoxScene from '../../components/BoxScene';
import BoxForm from '../../components/BoxForm';
import { getCalculatedBox } from '../../service';
import { SizeBoxType } from '../../types';
import {
  INIT_STATE_SIZE_BOX,
  INIT_STATE_ERRORS,
  INPUTS_LIST,
  ERROR_MESSAGES,
} from '../../components/BoxForm/constants';

import styles from './style';

const Main: React.FC = () => {
  const [vertices, setVertices] = useState<number[]>([]);
  const [sizeBox, setSizeBox] = useState<SizeBoxType>(INIT_STATE_SIZE_BOX);

  const isNotEmptyVertices = vertices.length > 0;

  const calculatedBox = async () => {
    try {
      const response = await getCalculatedBox(sizeBox);

      setVertices(response.data);
    } catch (error) {
      console.error(error);
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

  return (
    <Box sx={styles.mainPage}>
      <BoxForm
        sizeBox={sizeBox}
        handleInputData={handleInputData}
        calculatedBox={calculatedBox}
      />
      <Box sx={styles.viewPanel}>
        {isNotEmptyVertices && <BoxScene vertices={vertices} />}
      </Box>
    </Box>
  );
};

export default Main;
