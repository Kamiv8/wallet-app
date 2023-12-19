import { ChangePasswordForm } from '../models/apiTypes/settings/changePassword/changePassword.form';
import { ChangePasswordCommand } from '../models/apiTypes/settings/changePassword/changePassword.command';
import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';

export class SettingsApi {
  public static async changePassword(values: ChangePasswordForm) {
    const command = new ChangePasswordCommand(
      values.oldPassword,
      values.newPassword,
    );
    const data = await api.put('/settings/changePassword', command);
    return BaseApiHandler.handleApi(data);
  }
}
