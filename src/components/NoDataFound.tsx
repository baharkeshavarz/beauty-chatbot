import { Warning } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface NoDataFoundProps {
  message?: string;
}

const NoDataFound: FC<NoDataFoundProps> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <Alert
      variant="outlined"
      color="info"
      icon={<Warning />}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 1,
      }}
    >
      {message ?? t('common:messages.noRowFound')}
    </Alert>
  );
};

export default NoDataFound;
