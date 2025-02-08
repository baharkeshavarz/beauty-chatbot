import { To } from 'history';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import { SxProps } from '@mui/system';

import { DEFAULT_PATH } from 'src/configs/config';
import LogoIcon from './LogoIcon';
import Logo from './LogoMain';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
  logoSx?: SxProps;
  logoSource?: any;
}

const LogoSection = ({
  reverse,
  isIcon,
  sx,
  to,
  logoSx,
  logoSource,
}: Props) => {
  let defaultPath = DEFAULT_PATH;
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? defaultPath : to}
      sx={sx}
    >
      {isIcon ? (
        <LogoIcon />
      ) : (
        <Logo reverse={reverse} logoSx={logoSx} logoSource={logoSource} />
      )}
    </ButtonBase>
  );
};

export default LogoSection;
