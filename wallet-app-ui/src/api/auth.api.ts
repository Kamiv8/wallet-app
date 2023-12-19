import { ApiStatus, IApiResult } from '../models/apiResult';
import { AuthenticateCommand } from '../models/commands/auth/authenticate.command';
import { BaseApiHandler } from './baseApiHandler';
import { ResetPasswordCommand } from '../models/commands/auth/resetPassword.command';
import { VerifyAccountCommand } from '../models/apiTypes/account/verifyEmail/verifyAccount.command';
import { noAuthApi } from './baseAxios.config';
import { AuthenticateDto } from '../models/apiTypes/account/authenticate/authenticate.dto';
import { RegisterCommand } from '../models/apiTypes/account/register/register.command';
import { ChangeForgotPasswordCommand } from '../models/apiTypes/account/changeForgotPassword/changeForgotPassword.command';
import { TAuthenticateForm } from '../models/apiTypes/account/authenticate/authenticate.form';
import { TRegisterForm } from '../models/apiTypes/account/register/register.form';

export class AuthApi {
  public static async authenticate(
    value: TAuthenticateForm,
  ): Promise<IApiResult<AuthenticateDto>> {
    const command = new AuthenticateCommand(value.username, value.password);

    const data = await noAuthApi.post('/account/authenticate', command);

    const dataResult = BaseApiHandler.handleApi<AuthenticateDto>(data); // TODO Move to component
    if (dataResult.status === ApiStatus.SUCCESS) {
      localStorage.setItem('token', dataResult.data?.token ?? '');
      localStorage.setItem('type', 'SINGLE');
      localStorage.setItem('refreshToken', dataResult.data?.refreshToken ?? '');
    }

    return dataResult;
  }

  public static async register(
    value: TRegisterForm,
  ): Promise<IApiResult<null>> {
    const command = new RegisterCommand(
      value.username,
      value.email,
      value.password,
      value.confirmPassword,
      value.iconId,
    );
    const data = await noAuthApi.post('/account/register', command);

    return BaseApiHandler.handleApi<null>(data);
  }

  public static async resetPassword(value: any): Promise<IApiResult> {
    const command = new ResetPasswordCommand(value.email);
    const data = await noAuthApi.post('/account/forgotPassword', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async changeForgotPassword(values: any): Promise<IApiResult> {
    const command = new ChangeForgotPasswordCommand(
      values.email,
      values.token,
      values.password,
      values.confirmPassword,
    );
    const data = await noAuthApi.post('/account/changeForgotPassword', command);

    return BaseApiHandler.handleApi(data);
  }

  public static async verifyAccount(
    value: any,
    controller: AbortController,
  ): Promise<IApiResult> {
    const command = new VerifyAccountCommand(value.token, value.email);
    const data = await noAuthApi.get(`/account/confirmEmail`, {
      params: {
        token: command.token,
        email: command.email,
      },
      signal: controller.signal,
    });
    return BaseApiHandler.handleApi(data);
  }
}
