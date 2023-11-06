export enum ApiStatus {
  PENDING = 0,
  SUCCESS = 1,
  ERROR = 2,
}
export interface IApiResult<T = any> {
  status: ApiStatus;
  message: string;
  data?: T
}
