import { ReactNode, useMemo } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  AppBarProps,
  Typography,
  Box,
  Stack,
} from '@mui/material';

import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';
import IconButton from 'src/components/@extended/IconButton';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import UserAuth from '../UserAuth';
import theme from 'src/themes/theme';

interface Props {
  open: boolean;
  handleDrawerToggle?: () => void;
}

const Header = ({ open, handleDrawerToggle }: Props) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColorOpen =
    theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor =
    theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  const mainHeader: ReactNode = (
    <Box
      p={2}
      mx={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" alignItems="flex-end">
        {/* <IconButton
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          color="secondary"
          variant="light"
          sx={{
            color: 'text.primary',
            bgcolor: open ? iconBackColorOpen : iconBackColor,
            ml: { xs: 0, lg: -2 },
          }}
        >
          {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </IconButton> */}
        {headerContent}
        <UserAuth />
      </Stack>
    </Box>
  );

  // app-bar params
  const appBar: AppBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
