import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChatInput = () => {
  const { t } = useTranslation();
  return (
    <TextField
      sx={{
        bgcolor: 'common.white',
        opacity: 1,
        borderRadius: 8,
        border: 'none',
        minWidth: 350,
        outline: 'none',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
      inputProps={{
        sx: {
          color: theme => theme.palette.grey[100],
          '&::placeholder': {
            color: theme => theme.palette.grey[300],
            opacity: 1,
          },
        },
      }}
      placeholder={t('pages:chats.messageToSystem')}
    />
  );
};

export default ChatInput;
