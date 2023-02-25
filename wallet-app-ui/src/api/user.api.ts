import { IApiResult } from '../models/apiResult';
import { devConfig } from '../const/config';
import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';

export class UserApi {
  public static async getUserData(): Promise<IApiResult> {
    const data = await axios.get('/user/userData', UserApi.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async getActualMoney(): Promise<IApiResult> {
    const data = await axios.get('/user/actualMoney', UserApi.apiOptions());
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

  public static async changePassword(value: any): Promise<IApiResult> {
    const data = await axios.put(
      '/user/changePassword',
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
