import { AxiosResponse } from 'axios';
import { ApiStatus, IApiResult } from '../models/apiResult';

export class BaseApiHandler {
  static handleApi(response: AxiosResponse): IApiResult {
    if (response.status >= 300 && response.status < 200) {
      return {
        status: ApiStatus.ERROR,
        message: response.data.message,
      };
    }

    return {
      status: ApiStatus.SUCCESS,
      message: '',
      data: response.data,
    };
  }
}
