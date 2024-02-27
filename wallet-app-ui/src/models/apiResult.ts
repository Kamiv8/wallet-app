export enum ApiStatus {
  PENDING = 0,
  SUCCESS = 200,
  ERROR = 404,
  UNAUTHORIZED = 401,
}
export interface IApiResult<T = null> {
  status: ApiStatus;
  message: string;
  data?: T;
  validationMessages?: Array<TError>;
}

export type TError = {
  fieldName: string;
  message: string;
};
