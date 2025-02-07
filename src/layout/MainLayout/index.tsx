import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Breadcrumbs from 'src/components/@extended/Breadcrumbs';
import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';

import { useSelector } from 'src/store';
import { openDrawer } from 'src/store/reducers/menu';
import useServerMenu from './Drawer/hooks/useMenuItem';

const cover = '/assets/images/template-background.png';

const MainLayout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const drawerOpen = useSelector(state => state.menu.drawerOpen);
  const { container } = useSelector(state => state.config);

  const handleDrawerToggle = () => {
    dispatch(openDrawer({ drawerOpen: !drawerOpen }));
  };

  const menuItems = useServerMenu();
  const navigation = { items: [menuItems] };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1 }}>
        <Toolbar />
        {container && (
          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            /> */}
            <Outlet />
            {/* <Footer /> */}
          </Container>
        )}
        {!container && (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              backgroundImage: `url(${cover})`,
              backgroundRepeat: 'no-repeat',
              opacity: 0.7,
              backgroundSize: 'cover',
              height: '100vh',
            }}
          >
            {/* <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            /> */}
            <Outlet />
            {/* <Footer /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
