import axios from 'axios';

import { toast } from 'react-toastify';
import i18n from 'src/i18n/i18n';
import { refreshToken } from 'src/services/account/index';

const config = {
  baseURL:
    import.meta.env.MODE === 'development'
      ? undefined
      : import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000 * 10,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': import.meta.env.VITE_APP_BASE_URL,
  },
};

function isUnauthorizedError(error) {
  const {
    response: { status, statusText, data },
  } = error;

  return status === 401 || !data.data;
}

let refreshingFunc: any = undefined;

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    const lang = localStorage.getItem('i18nextLng');
    if (lang) {
      config.headers['Accept-Language'] = lang;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

_axios.interceptors.response.use(
  next => {
    if (next.data?.Message) {
      const message = next.data?.Message;
      if (next.data?.success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }
    return Promise.resolve(next);
  },
  async error => {
    const expectedErrors =
      error.response.status >= 400 && error.response.status < 500;

    if (error?.response?.status === 403) {
      const message = i18n.t('common:messages.toast.permissionError');
      toast.error(message, {
        toastId: message,
      });
    } else if (error?.response?.status === 401) {
      try {
        if (!refreshingFunc) {
          refreshingFunc = refreshToken();
        }
        const response = await refreshingFunc;

        if (!response.data.data) {
          throw Error('Refresh token is not valid!');
        }
        try {
          return await axios.request(error.config);
        } catch (innerError) {
          // if original req failed with 401 again - it means server returned not valid token for refresh request
          if (isUnauthorizedError(innerError)) {
            throw innerError;
          }
        }
      } catch (err) {
        //  toast.error('Authentication failed! please login again'); //TODO
        //  window.location.href = '/login';  //TODO
      } finally {
        refreshingFunc = undefined;
      }
    } else if (expectedErrors) {
      const message = error.response.data?.Message;
      if (message) {
        toast.error(message, {
          toastId: message,
        });
      }
    } else if (error?.response?.status === 500) {
      const message = 'Internal Server Error';
      toast.error(message, {
        toastId: message,
      });
    }

    return Promise.reject(error);
  },
);

export default _axios;
