import { IApiResult } from '../models/apiResult';
import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';
import { LocalstorageHelper } from '../helpers';
import { LocalstorageEnum } from '../types/enums';
import { GetRefreshTokenResponse } from '../models/apiTypes/token/getRefreshToken/getRefreshToken.response';

export class TokenApi {
  public static async getAccessToken(): Promise<
    IApiResult<GetRefreshTokenResponse>
  > {
    const refreshToken = LocalstorageHelper.getItem(
      LocalstorageEnum.REFRESH_TOKEN,
    );
    const res = await api.get(`/token/${refreshToken}`);
    return BaseApiHandler.handleApi<GetRefreshTokenResponse>(res);
  }
}
