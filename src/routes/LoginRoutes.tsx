import { lazy } from 'react';

import Loadable from 'src/components/Loadable';
import CommonLayout from 'src/layout/CommonLayout';
import GuestGuard from 'src/utils/route-guard/GuestGuard';

const BasicLogin = Loadable(lazy(() => import('src/pages/auth/BasicLogin')));
const SendOtp = Loadable(lazy(() => import('src/pages/auth/SendOtp')));
const LoginOtp = Loadable(lazy(() => import('src/pages/auth/LoginOtp')));

const LOGIN_WAYS = ['OTP', 'BASIC', 'EMAIL'] as const;

type LoginWaysType = (typeof LOGIN_WAYS)[number];
const CURRENT_LOGIN_WAY: LoginWaysType = 'BASIC';

const LOGIN_ROUTES: Record<LoginWaysType, any> = {
  OTP: [
    {
      path: 'login',
      element: <SendOtp />,
    },
    {
      path: 'otp',
      element: <LoginOtp />,
    },
  ],
  BASIC: [
    {
      path: 'login',
      element: <BasicLogin />,
    },
  ],
  EMAIL: <></>,
};

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [...LOGIN_ROUTES[CURRENT_LOGIN_WAY]],
    },
  ],
};

export default LoginRoutes;
