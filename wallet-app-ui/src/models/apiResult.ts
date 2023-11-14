export enum ApiStatus {
  PENDING = 0,
  SUCCESS = 200,
  ERROR = 404,
  UNAUTHORIZED = 401

}
export interface IApiResult<T = any> {
  status: ApiStatus;
  message: string;
  data?: T
}
