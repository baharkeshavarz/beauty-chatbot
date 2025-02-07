import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const UserAuth = () => {
  const { t } = useTranslation();

  return (
    <Box
      px={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button variant="outlined" sx={{ minWidth: 100, borderRadius: 15 }}>
        {t('common:buttons.signup')}
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ minWidth: 100, borderRadius: 15, mx: 1 }}
      >
        {t('common:buttons.login')}
      </Button>
    </Box>
  );
};

export default UserAuth;
