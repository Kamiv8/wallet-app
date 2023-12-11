import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import { api } from './baseAxios.config';

export class CurrencyApi {
  public static async getCurrency(): Promise<IApiResult> {
    const data = await api.get('/currency');

    return BaseApiHandler.handleApi(data);
  }
}
