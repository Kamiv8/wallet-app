export enum ApiStatus {
  PENDING = 0,
  SUCCESS = 1,
  ERROR = 2,
}
export interface IApiResult {
  status: ApiStatus;
  message: string;
  data?: any;
}
