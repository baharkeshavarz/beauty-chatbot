import axios from '../../lib/axios';
import {
  ChangePasswordService,
  GetAccountDetail,
  GetPrivilegesService,
  getUserDetailService,
  GetUserMenuService,
  LoginByOtpService,
  LoginService,
  LogoutService,
  RefreshTokenService,
  SendLoginOtpService,
} from './types';

const BASE_URL = '/api/v1/account';

export const login: LoginService = ({ payload }) => {
  return axios.post(`${BASE_URL}/login`, payload);
};

export const sendLoginOtp: SendLoginOtpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/sendLoginOtp`, payload);
};

export const loginByOtp: LoginByOtpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/loginByOtp`, payload);
};

export const logout: LogoutService = () => {
  return axios.post(`${BASE_URL}/logout`);
};

export const getUserMenu: GetUserMenuService = () => {
  return axios.get(`${BASE_URL}/getUserMenu`);
};

export const refreshToken: RefreshTokenService = () => {
  return axios.post(`${BASE_URL}/refresh`);
};

export const getPrivileges: GetPrivilegesService = () => {
  return axios.post(`${BASE_URL}/getPrivileges`);
};

export const getAccountDetail: GetAccountDetail = () => {
  return axios.post(`${BASE_URL}/detail`);
};

export const getUserDetail: getUserDetailService = ({ userId }) => {
  return axios.get(`${BASE_URL}/${userId}/GetSummaryById`);
};

export const changePassword: ChangePasswordService = ({ payload }) => {
  return axios.post(`${BASE_URL}/ChangePassword`, payload);
};
