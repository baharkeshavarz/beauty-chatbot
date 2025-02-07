import { Box, useTheme } from '@mui/material';
import { DEFAULT_LOGO_DARK, DEFAULT_LOGO_LIGHT } from 'src/configs/config';

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const sources: Record<typeof mode, string> = {
    light: DEFAULT_LOGO_LIGHT,
    dark: DEFAULT_LOGO_DARK,
  };

  return (
    <Box
      sx={{
        pt: 5,
        pb: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          height: 56,
          borderRadius: '50%',
        }}
        src={sources[mode]}
        alt="Zhoost"
      />
    </Box>
  );
};

export default LogoMain;
