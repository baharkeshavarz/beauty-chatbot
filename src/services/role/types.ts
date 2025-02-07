import { Basic, Response } from '../types/common';
import { IRole } from '../userAdmin/types';

export enum RoleTypeEnum {
  Customer = 1,
  Supplier = 2,
}
export interface GetRequestDetail {
  (args: { id: number | string }): Response<Basic<IRole>>;
}
