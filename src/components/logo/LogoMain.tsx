import { Box, useTheme } from '@mui/material';

import {
  DEFAULT_LOGO_DARK,
  DEFAULT_LOGO_LIGHT,
  DEFAULT_PROJECT_NAME,
} from 'src/configs/config';

interface LogoMainProps {
  reverse?: boolean;
  logoSx: any;
  logoSource?: any;
}

const LogoMain = ({
  reverse,
  logoSx,
  logoSource,
  ...others
}: LogoMainProps) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const sources: Record<typeof mode, string> = {
    light: DEFAULT_LOGO_LIGHT,
    dark: DEFAULT_LOGO_DARK,
  };

  console.log(logoSx);

  return (
    <Box
      sx={{
        pt: 5,
        pb: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          height: 56,
          borderRadius: '50%',
          ...logoSx,
        }}
        src={logoSource ? logoSource : sources[mode]}
        alt={DEFAULT_PROJECT_NAME}
      />
    </Box>
  );
};

export default LogoMain;
