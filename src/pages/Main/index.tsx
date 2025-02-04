import { Box } from '@mui/material';
import BoxScene from '../../components/BoxScene';
import BoxForm from '../../components/BoxForm';
import styles from './style';

const vertices = [
  // Передняя грань (Z = 0)
  0, 0, 0, 2, 0, 0, 2, 3, 0, 0, 0, 0, 2, 3, 0, 0, 3, 0,

  // Задняя грань (Z = 1)
  0, 0, 1, 2, 0, 1, 2, 3, 1, 0, 0, 1, 2, 3, 1, 0, 3, 1,

  // Верхняя грань (Y = 3)
  0, 3, 0, 2, 3, 0, 2, 3, 1, 0, 3, 0, 2, 3, 1, 0, 3, 1,

  // Нижняя грань (Y = 0)
  0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 1,

  // Левая грань (X = 0)
  0, 0, 0, 0, 3, 0, 0, 3, 1, 0, 0, 0, 0, 3, 1, 0, 0, 1,

  // Правая грань (X = 2)
  2, 0, 0, 2, 3, 0, 2, 3, 1, 2, 0, 0, 2, 3, 1, 2, 0, 1,
];

const Main: React.FC = () => (
  <Box sx={styles.mainPage}>
    <BoxForm />
    <Box sx={styles.viewPanel}>
      <BoxScene vertices={vertices} />
    </Box>
  </Box>
);

export default Main;
