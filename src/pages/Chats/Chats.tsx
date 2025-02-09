import { Box, useTheme } from '@mui/material';
import ChatSwiper from './components/ChatSwiper';
import SocialMedia from './components/SocialMedia';
import ChatHeader from './components/ChatHeader';

const Chats = () => {
  const theme = useTheme();
  return (
    <Box position="relative">
      <Box position="absolute" width="100%" zIndex={theme.zIndex.fab}>
        <ChatHeader />
        <SocialMedia />
      </Box>
      <ChatSwiper />
    </Box>
  );
};

export default Chats;
