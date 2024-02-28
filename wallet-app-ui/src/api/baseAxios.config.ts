import axios from 'axios';
import { TokenApi } from './token.api';
import { devConfig } from '../const/config';
import { ApiStatus } from '../models/apiResult';
import { LocalstorageHelper } from '../helpers';
import { LocalstorageEnum } from '../types/enums';
import { CustomString } from '../overrides/string.override';

export const api = axios.create();
api.interceptors.request.use(
  async (config) => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${LocalstorageHelper.getItem(
      LocalstorageEnum.TOKEN,
    )}`;
    config.headers['Content-Type'] = 'application/json';
    config.baseURL = devConfig.baseURL;
    config.withCredentials = true;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === ApiStatus.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const token = await TokenApi.getAccessToken();
      originalRequest.headers.Authorization = `Bearer ${token.data?.jwtToken}`;
      LocalstorageHelper.setItem(
        LocalstorageEnum.TOKEN,
        token.data?.jwtToken ?? CustomString.Empty,
      );
      LocalstorageHelper.setItem(
        LocalstorageEnum.REFRESH_TOKEN,
        token.data?.refreshToken ?? CustomString.Empty,
      );
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const noAuthApi = axios.create();
noAuthApi.interceptors.request.use(
  async (config) => {
    config.headers = config.headers || {};
    config.headers['Content-Type'] = 'application/json';
    config.baseURL = devConfig.baseURL;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

noAuthApi.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  },
);
