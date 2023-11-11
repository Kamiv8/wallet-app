import { IApiResult } from "../models/apiResult";
import { api } from "./baseAxios.config";
import { BaseApiHandler } from "./baseApiHandler";
import { CookieHelper } from "../helpers/cookie.helper";


export class TokenApi {

  public static async getAccessToken(): Promise<IApiResult> {
    const tokenCookie = CookieHelper.getCookie("refreshToken");
    const res = await api.get(`/token/${tokenCookie}`);
    return BaseApiHandler.handleApi(res);
  }

  
}