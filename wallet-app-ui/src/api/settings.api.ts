import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';
import {
  ChangeDateRangeCommand,
  ChangeDateRangeForm,
  ChangePasswordCommand,
  ChangePasswordForm,
} from '../models/apiTypes/settings';
import { IApiResult } from '../models/apiResult';

export class SettingsApi {
  public static async changePassword(values: ChangePasswordForm) {
    const command = new ChangePasswordCommand(
      values.oldPassword,
      values.newPassword,
    );
    const data = await api.put('/settings/changePassword', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async changeDateRange(
    values: ChangeDateRangeForm,
  ): Promise<IApiResult> {
    const command = new ChangeDateRangeCommand(
      values.option,
      values.customDay,
      values.customDate,
    );
    const data = await api.put('/account/changeDateRange', command);
    return BaseApiHandler.handleApi(data);
  }
}
