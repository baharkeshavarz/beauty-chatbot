import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'src/store';
import { languageMapper } from 'src/themes';

const ToastProvider = () => {
  const theme = useTheme();
  const i18n = useSelector(state => state.config.i18n);

  return (
    <Box
      sx={{
        '& .Toastify__toast-container *': {
          fontFamily: `${languageMapper[i18n].fontFamily} !important`,
        },
      }}
    >
      <ToastContainer
        rtl={theme.direction === 'rtl'}
        position="top-center"
        theme={theme.palette.mode}
      />
    </Box>
  );
};

export default ToastProvider;
