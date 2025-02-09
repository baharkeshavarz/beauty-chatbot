import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from 'src/components/logo';
import { DEFAULT_LOGO_DARK } from 'src/configs/config';
import { useAppContext } from 'src/hooks/useAppContext';
import { useTranslation } from 'react-i18next';

const ChatHeader = () => {
  const { t } = useTranslation();
  const { isMobile } = useAppContext();
  const fontVariant = isMobile ? 'h6' : 'h3';
  const logoWidthSize = isMobile ? 200 : 270;
  const logoHeightSize = isMobile ? 110 : 120;
  return (
    <>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={isMobile ? 10 : 14}
      >
        <Logo
          logoSx={{ width: logoWidthSize, height: logoHeightSize }}
          logoSource={DEFAULT_LOGO_DARK}
        />
        <Typography
          variant={fontVariant}
          textAlign="center"
          lineHeight={2}
          color="grey[100]"
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
