import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useAppContext } from 'src/hooks/useAppContext';
import ChatInput from './ChatInput';
import { useTranslation } from 'react-i18next';

const ChatBox = () => {
  const { t } = useTranslation();
  const { isMobile } = useAppContext();
  const fontVariant = isMobile ? 'h4' : 'h3';

  return (
    <>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={10}
        minWidth={isMobile ? 350 : 500}
      >
        <Typography variant={fontVariant} color="common.black" py={2}>
          {t('pages:chats.help')}
        </Typography>
        <ChatInput />
      </Stack>
    </>
  );
};

export default ChatBox;
