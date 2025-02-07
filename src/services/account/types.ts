import { IUserConfig, UserTypeEnum, VerifyStatusEnum } from '../common/types';
import { Basic, Response } from '../types/common';
import { IContractStatus } from '../userAdmin/types';

export interface SendLoginOtpPayload {
  mobileNumber: string;
  prefixPhoneNumber: string;
}
export interface SendLoginOtpService {
  ({ payload }: { payload: SendLoginOtpPayload }): Response;
}

export interface LoginPayload {
  user_name: string;
  password: string;
  remember_me: boolean;
}
export interface LoginService {
  ({ payload }: { payload: LoginPayload }): Response<Basic<boolean>>;
}

export interface LogoutPayload {
  refreshToken: string;
}
export interface LogoutService {
  (): Response<Basic<boolean>>;
}

export interface GetUserMenuService {
  (): Response;
}

export interface RefreshTokenPayload {
  refreshToken: string;
}
export interface RefreshTokenService {
  (): Response<Basic<boolean>>;
}

export interface IPrivilege {
  application_privilege_id: number;
  name: string;
  type: number[];
  group: string;
  hasPrivilege?: boolean;
}

export interface GetPrivilegesService {
  (): Response<Basic<IPrivilege[]>>;
}

export interface LoginByOtpPayload {
  userName: string;
  password: string;
}
export interface LoginByOtpService {
  ({ payload }: { payload: LoginByOtpPayload }): Response;
}

export interface IAccount {
  user_id: number;
  mobile: string;
  verify_status: VerifyStatusEnum;
  user_type: UserTypeEnum;
  user_types: UserTypeEnum[];
  agreement: true;
  status: string;
  status_description: string;
  kyc_status: string[];
  kyc_desc: string;
  contract_status: IContractStatus;
  contract_statuses: IContractStatus[];
  referral_id: number;
  profile_file_id: number;
  privileges: {
    privilege_id: number;
  }[];
  config: IUserConfig[];
  reference_chain: number[];
}

export interface GetAccountDetail {
  (): Response<Basic<IAccount>>;
}

export interface getUserDetailService {
  (args: { userId: number }): Response;
}

export interface ChangePasswordPayload {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

export interface ChangePasswordService {
  ({ payload }: { payload: ChangePasswordPayload }): Response;
}
