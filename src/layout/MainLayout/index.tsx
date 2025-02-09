import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Drawer from './Drawer';
import Header from './Header';

import { useSelector } from 'src/store';
import { openDrawer } from 'src/store/reducers/menu';

const MainLayout = () => {
  const dispatch = useDispatch();

  const drawerOpen = useSelector(state => state.menu.drawerOpen);
  const { container } = useSelector(state => state.config);

  const handleDrawerToggle = () => {
    dispatch(openDrawer({ drawerOpen: !drawerOpen }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ width: '100%' }}>
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
          <>
            <Outlet />
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
