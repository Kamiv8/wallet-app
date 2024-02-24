import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import { api } from './baseAxios.config';
import { TGetCurrenciesResponse } from '../models/apiTypes/currency';

export class CurrencyApi {
  public static async addCurrencies(): Promise<
    IApiResult<Array<TGetCurrenciesResponse>>
  > {
    const data = await api.get('/currency');
    return BaseApiHandler.handleApi(data);
  }
}
