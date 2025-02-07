import { Home } from 'iconsax-react';
import { lazy } from 'react';
import Loadable from 'src/components/Loadable';
import MainLayout from 'src/layout/MainLayout';
import AuthGuard from 'src/utils/route-guard/AuthGuard';
import GuestGuard from 'src/utils/route-guard/GuestGuard';

const Chats = Loadable(lazy(() => import('src/pages/Chats/Chats')));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <MainLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: '',
          children: [
            {
              path: '',
              element: <Home />,
            },
            {
              path: 'chats',
              element: <Chats />,
            },
          ],
        },
      ],
    },
  ],
};

export default MainRoutes;
