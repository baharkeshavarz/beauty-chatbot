import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from 'src/components/logo';
import { DEFAULT_LOGO_LIGHT } from 'src/configs/config';
import { useAppContext } from 'src/hooks/useAppContext';
import { useTranslation } from 'react-i18next';

const ChatHeader = () => {
  const { t } = useTranslation();
  const { isMobile } = useAppContext();
  const fontVariant = isMobile ? 'h6' : 'h3';

  return (
    <>
      <Stack display="flex" justifyContent="center" alignItems="center" pt={15}>
        <Logo
          logoSx={{ width: 200, height: 90 }}
          logoSource={DEFAULT_LOGO_LIGHT}
        />
        <Typography
          variant={fontVariant}
          textAlign="center"
          lineHeight={2}
          color="common.black"
          py={2}
        >
          {t('pages:chats.hiMessage')}
          <br />
          {t('pages:chats.channelMessage')}
        </Typography>
      </Stack>
    </>
  );
};

export default ChatHeader;
