import { IApiResult } from '../models/apiResult';
import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';
import { LocalstorageHelper } from '../helpers/localstorage.helper';
import { LocalstorageEnum } from '../types/enums/localstorage.enum';

export class TokenApi {
  public static async getAccessToken(): Promise<IApiResult> {
    const refreshToken = LocalstorageHelper.getItem(
      LocalstorageEnum.REFRESH_TOKEN,
    );
    const res = await api.get(`/token/${refreshToken}`);
    return BaseApiHandler.handleApi(res);
  }
}
