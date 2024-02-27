import { BaseApiHandler } from './baseApiHandler';
import { IApiResult } from '../models/apiResult';
import { BaseApiConfig } from './baseApiConfig';
import { api } from './baseAxios.config';
import {
  CreateUserCategoryCommand,
  DeleteUserCategoryCommand,
  TCreateUserCategoryForm,
  TGetUserCategoriesResponse,
} from '../models/apiTypes/category';

export class CategoryApi extends BaseApiConfig {
  public static async getUserCategories(): Promise<
    IApiResult<Array<TGetUserCategoriesResponse>>
  > {
    const data = await api.get('/category/userCategories');
    return BaseApiHandler.handleApi(data);
  }

  public static async createUserCategory(
    values: TCreateUserCategoryForm,
  ): Promise<IApiResult> {
    const command = new CreateUserCategoryCommand(values.name);
    const data = await api.post('/category/createUserCategory', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async deleteUserCategory(
    categoryId: string,
  ): Promise<IApiResult> {
    const command = new DeleteUserCategoryCommand(categoryId);
    const data = await api.delete(`/category/deleteUserCategory/${command.id}`);
    return BaseApiHandler.handleApi(data);
  }
}
