import { IApiResult } from '../models/apiResult';
import { devConfig } from '../const/config';
import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';
import { api } from './baseAxios.config';
import { GetAccountDataResponse } from '../models/apiTypes/account/getAccountData/getAccountData.response';

export class UserApi {
  public static async getUserData(): Promise<
    IApiResult<GetAccountDataResponse>
  > {
    const data = await api.get('/account/data');
    return BaseApiHandler.handleApi(data);
  }

  public static async changeCurrencies(value: any): Promise<IApiResult> {
    const data = await axios.put(
      '/user/changeCurrencies',
      value,
      UserApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async changeIcon(value: any): Promise<IApiResult> {
    const data = await axios.put(
      '/user/changeIcon',
      value,
      UserApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async changeUsername(value: any): Promise<IApiResult> {
    const data = await axios.put(
      '/user/changeUsername',
      value,
      UserApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  private static apiOptions() {
    return {
      baseURL: devConfig.baseURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
    };
  }
}
