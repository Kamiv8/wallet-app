import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';
import {
  ChangePasswordCommand,
  ChangePasswordForm,
} from '../models/apiTypes/settings';

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
