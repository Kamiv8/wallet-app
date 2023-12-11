import { IApiResult } from '../models/apiResult';
import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';

export class TokenApi {
  public static async getAccessToken(): Promise<IApiResult> {
    const refreshToken = localStorage.getItem('refreshToken');
    const res = await api.get(`/token/${refreshToken}`);
    return BaseApiHandler.handleApi(res);
  }
}
