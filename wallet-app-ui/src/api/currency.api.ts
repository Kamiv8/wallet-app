import { IApiResult } from '../models/apiResult';
import axios from 'axios';
import { devConfig } from '../const/config';
import { BaseApiHandler } from './baseApiHandler';

export class CurrencyApi {
  public static async getCurrency(): Promise<IApiResult> {
    const data = await axios.get('/currency', CurrencyApi.apiOptions());

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
