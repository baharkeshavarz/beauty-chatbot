import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from 'src/components/logo';
import { DEFAULT_LOGO_LIGHT } from 'src/configs/config';
import { useAppContext } from 'src/hooks/useAppContext';

const ChatHeader = () => {
  const { isMobile } = useAppContext();
  const fontVariant = isMobile ? 'h5' : 'h3';

  return (
    <>
      <Stack display="flex" justifyContent="center" alignItems="center" pt={15}>
        <Logo
          logoSx={{ width: 180, height: 80 }}
          logoSource={DEFAULT_LOGO_LIGHT}
        />
        <Stack direction="row" spacing={2.2}>
          <Typography variant={fontVariant} color="common.black">
            B E A U T Y
          </Typography>
          <Typography variant={fontVariant} color="common.black">
            B U S I N E S S
          </Typography>
          <Typography variant={fontVariant} color="primary">
            AI
          </Typography>
          <Typography variant={fontVariant} color="common.black">
            S O L U T I O N
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default ChatHeader;
