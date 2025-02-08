import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Drawer from './Drawer';
import Header from './Header';

import { useSelector } from 'src/store';
import { openDrawer } from 'src/store/reducers/menu';
import useServerMenu from './Drawer/hooks/useMenuItem';
import { DEFAULT_BACKGROUND_IMAGE } from 'src/configs/config';

const MainLayout = () => {
  const dispatch = useDispatch();

  const drawerOpen = useSelector(state => state.menu.drawerOpen);
  const { container } = useSelector(state => state.config);

  const handleDrawerToggle = () => {
    dispatch(openDrawer({ drawerOpen: !drawerOpen }));
  };

  const menuItems = useServerMenu();
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1 }}>
        {/* {container && (
          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
           <Outlet />
          </Container>
        )} */}

        {!container && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundImage: `url(${DEFAULT_BACKGROUND_IMAGE})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              opacity: 0.7,
              backgroundSize: 'cover',
              height: '100vh',
            }}
          >
            <Outlet />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
