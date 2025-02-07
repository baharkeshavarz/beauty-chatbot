import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { drawerWidth } from 'src/configs/config';

interface Props extends MuiAppBarProps {
  open?: boolean;
}

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<Props>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent', //TODO
  border: '0 !important',
  marginTop: 40,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7.5)})`,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBarStyled;
