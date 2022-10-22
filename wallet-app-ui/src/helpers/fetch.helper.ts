import axios, { AxiosRequestConfig } from 'axios';
import { devConfig } from '../const/config';

const config: AxiosRequestConfig = {
  baseURL: devConfig.baseURL,
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  },
};

export const api = axios.create(config);
