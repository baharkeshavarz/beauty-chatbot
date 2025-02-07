import axios from '../../lib/axios';
import { GetRequestDetail } from './types';

const BASE_URL = '/api/v1/userAdmin';

export const getRequestDetail: GetRequestDetail = ({ id }) => {
  return axios.post(`${BASE_URL}/${id}/detail`);
};
