import { Stack } from '@mui/material';
import PoweredBy from 'src/components/PoweredBy';

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ p: '24px 16px 0px' }}
      dir="ltr"
    >
      <PoweredBy />
    </Stack>
  );
};

export default Footer;
