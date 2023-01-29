import { devConfig } from '../const/config';
import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';
import { IApiResult } from '../models/apiResult';

export class CategoryApi {
  public static async getUserCategory(): Promise<IApiResult> {
    const data = await axios.get('/category', CategoryApi.apiOptions());

    return BaseApiHandler.handleApi(data);
  }

  public static async getDefaultCategory(): Promise<IApiResult> {
    const data = await axios.get('/category/default', CategoryApi.apiOptions());
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
