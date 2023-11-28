import { ApiStatus, IApiResult } from "../models/apiResult";
import { AuthenticateCommand } from "../models/commands/auth/authenticate.command";
import { BaseApiHandler } from "./baseApiHandler";
import axios from "axios";
import { ResetPasswordCommand } from "../models/commands/auth/resetPassword.command";
import { VerifyAccountCommand } from "../models/commands/account/verifyEmail/verifyAccount.command";
import { devConfig } from "../const/config";
import { noAuthApi } from "./baseAxios.config";
import { CookieHelper } from "../helpers/cookie.helper";
import { AuthenticateDto } from "../models/commands/account/authenticate/authenticate.dto";
import { RegisterCommand } from "../models/commands/account/register/register.command";


export class AuthApi {
  public static async authenticate(value: any): Promise<IApiResult<AuthenticateDto>> {
    const command = new AuthenticateCommand(value.username, value.password);

    const data = await noAuthApi.post(
      '/account/authenticate',
      command,
    );

    const dataResult = BaseApiHandler.handleApi<AuthenticateDto>(data);
    if (dataResult.status === ApiStatus.SUCCESS) {
      localStorage.setItem('token', dataResult.data?.token ?? "");
      localStorage.setItem('type', 'SINGLE');
      CookieHelper.setCookie("refreshToken", dataResult.data?.refreshToken ?? "");
    }

    return dataResult;
  }

  public static async register(value: any): Promise<IApiResult<null>> {
    const command = new RegisterCommand(
      value.username,
      value.email,
      value.password,
      value.confirmPassword,
      value.icon,
    );
    const data = await noAuthApi.post(
      '/account/register',
      command,
    );

    return BaseApiHandler.handleApi<null>(data);
  }

  public static async resetPassword(value: any): Promise<IApiResult> {
    const command = new ResetPasswordCommand(value.email);
    const data = await axios.post(
      '/auth/resetPassword',
      command,
      AuthApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async verifyAccount(
    value: any,
    controller: AbortController,
  ): Promise<IApiResult> {
    const command = new VerifyAccountCommand(value.token, value.email);
    const data = await noAuthApi.get(
      `/account/confirmEmail`,
      {
        params: {
          token: command.token,
          email: command.email
        },
        signal: controller.signal,
        ...AuthApi.apiOptions(),
      },
    );
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
