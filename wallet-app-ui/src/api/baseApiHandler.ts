import { AxiosResponse } from 'axios';
import { ApiStatus, IApiResult } from '../models/apiResult';

export class BaseApiHandler {
  static handleApi<T = any>(response: AxiosResponse): IApiResult<T> {
    if (response.status >= 300 && response.status < 200) {
      return {
        status: ApiStatus.ERROR,
        message: response.data.message,
      };
    }

    return {
      status: ApiStatus.SUCCESS,
      message: '',
      data: response.data.response,
    } as IApiResult<T>;
  }
}
