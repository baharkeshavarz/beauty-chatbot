import { lazy } from 'react';
import Loadable from 'src/components/Loadable';
import MainLayout from 'src/layout/MainLayout';
import AuthGuard from 'src/utils/route-guard/AuthGuard';
import GuestGuard from 'src/utils/route-guard/GuestGuard';

const Home = Loadable(lazy(() => import('src/pages/Home/Home')));
const Chats = Loadable(lazy(() => import('src/pages/Chats/Chats')));
const NotFound = Loadable(lazy(() => import('src/pages/maintenance/404')));

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
              element: <Chats />,
            },
            {
              path: 'chats',
              element: <Chats />,
            },
            {
              path: '*',
              element: <NotFound />,
            },
          ],
        },
      ],
    },
  ],
};

export default MainRoutes;
