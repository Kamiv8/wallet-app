import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';
import { IApiResult } from '../models/apiResult';
import { BaseApiConfig } from './baseApiConfig';

export class CategoryApi extends BaseApiConfig {
  public static async getUserCategory(type: any): Promise<IApiResult> {
    console.log(type);
    const data = await axios.get('/category', {
      params: { type },
      ...CategoryApi.apiOptions(),
    });

    return BaseApiHandler.handleApi(data);
  }

  public static async getDefaultCategory(): Promise<IApiResult> {
    const data = await axios.get('/category/default', CategoryApi.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async deleteCategory(value: any): Promise<IApiResult> {
    const data = await axios.delete(
      `/category/${value}`,
      CategoryApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async addNewCategory(value: any): Promise<IApiResult> {
    const data = await axios.post('/category', value, CategoryApi.apiOptions());
    return BaseApiHandler.handleApi(data);
  }
}
