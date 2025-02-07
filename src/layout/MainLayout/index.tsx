import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Container, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import Breadcrumbs from 'src/components/@extended/Breadcrumbs';
import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';

import { useSelector } from 'src/store';
import { openDrawer } from 'src/store/reducers/menu';
import useServerMenu from './Drawer/hooks/useMenuItem';

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
      <Box
        component="main"
        sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        {container && (
          // Change to xl to enable the container
          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            />
            <Outlet />
            {/* <Footer /> */}
          </Container>
        )}
        {!container && (
          <Box
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            />
            <Outlet />
            {/* <Footer /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
