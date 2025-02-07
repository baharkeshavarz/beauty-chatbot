import { To } from 'history';
import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';
import { SxProps } from '@mui/system';

import { DEFAULT_PATH } from 'src/configs/config';
import LogoIcon from './LogoIcon';
import Logo from './LogoMain';
import { useSelector } from 'react-redux';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

const LogoSection = ({ reverse, isIcon, sx, to }: Props) => {
  let defaultPath = DEFAULT_PATH;
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? defaultPath : to}
      sx={sx}
    >
      {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
    </ButtonBase>
  );
};

export default LogoSection;
