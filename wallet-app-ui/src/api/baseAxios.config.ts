import axios from "axios";
import { TokenApi } from "./token.api";
import { devConfig } from "../const/config";


export const api = axios.create();
api.interceptors.request.use(async config => {
  config.headers = {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  };
  config.baseURL = devConfig.baseURL;
  config.withCredentials = true;
  return config;
}, error => {
  Promise.reject(error);
})
api.interceptors.response.use(async response => {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const token = await TokenApi.getAccessToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token.data?.jwtToken}`;
    return api(originalRequest);
  }
 return Promise.reject(error);
})

export const noAuthApi = axios.create();
noAuthApi.interceptors.request.use(async config => {
  config.headers = {
    "Content-Type": 'application/json'
  };
  config.baseURL = devConfig.baseURL;
  return config;
}, error => {
  Promise.reject(error)
})