import axios from '../../lib/axios';

export const BASE_URL = '/api/v1/common';

export const getCountryCodeList = () => {
  return axios.get(`${BASE_URL}/getCountryCodeList`);
};
