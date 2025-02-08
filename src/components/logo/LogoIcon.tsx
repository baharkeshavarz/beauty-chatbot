import { useTheme } from '@mui/material/styles';
import {
  DEFAULT_LOGO_DARK,
  DEFAULT_LOGO_LIGHT,
  DEFAULT_PROJECT_NAME,
} from 'src/configs/config';

const LogoIcon = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const sources: Record<typeof mode, string> = {
    light: DEFAULT_LOGO_LIGHT,
    dark: DEFAULT_LOGO_DARK,
  };

  return (
    <>
      <img
        style={{
          height: 38,
          borderRadius: '50%',
        }}
        src={sources[mode]}
        alt={DEFAULT_PROJECT_NAME}
      />
    </>
  );
};

export default LogoIcon;
