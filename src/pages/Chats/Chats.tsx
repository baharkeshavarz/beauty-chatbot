import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from 'src/components/logo';
import Wrapper from 'src/components/Wrapper/Wrapper';

const Chats = () => {
  return (
    <Wrapper>
      <Stack display="flex" justifyContent="center" alignItems="center" pt={10}>
        <Logo />
        <Stack direction="row" spacing={2}>
          <Typography variant="h2">B E A U T Y</Typography>
          <Typography variant="h2">B U S I N E S S</Typography>
          <Typography variant="h2" color="primary">
            AI
          </Typography>
          <Typography variant="h2">S O L U T I O N</Typography>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default Chats;
