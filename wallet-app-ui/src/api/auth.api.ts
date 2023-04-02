import { ApiStatus, IApiResult } from '../models/apiResult';
import { AuthenticateCommand } from '../models/commands/auth/authenticate.command';
import { BaseApiHandler } from './baseApiHandler';
import { RegisterCommand } from '../models/commands/auth/register.command';
import axios from 'axios';
import { ResetPasswordCommand } from '../models/commands/auth/resetPassword.command';
import { VerifyAccountCommand } from '../models/commands/auth/verifyAccount.command';
import { devConfig } from '../const/config';

export class AuthApi {
  public static async authenticate(value: any): Promise<IApiResult> {
    const command = new AuthenticateCommand(value.email, value.password);

    const data = await axios.post(
      '/auth/authenticate',
      command,
      AuthApi.apiOptions(),
    );

    const dataResult = BaseApiHandler.handleApi(data);

    if (dataResult.status === ApiStatus.SUCCESS) {
      localStorage.setItem('token', dataResult.data.token);
    }

    return dataResult;
  }

  public static async register(value: any): Promise<IApiResult> {
    const command = new RegisterCommand(
      value.username,
      value.email,
      value.password,
      value.confirmPassword,
      value.icon,
    );
    const data = await axios.post(
      '/auth/register',
      command,
      AuthApi.apiOptions(),
    );

    return BaseApiHandler.handleApi(data);
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
    const command = new VerifyAccountCommand(value.token);
    const data = await axios.post(
      `/auth/verify-email/${command.token}`,
      {},
      {
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
