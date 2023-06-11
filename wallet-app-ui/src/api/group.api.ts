import { BaseApiConfig } from './baseApiConfig';
import { IApiResult } from '../models/apiResult';
import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';

export class GroupApi extends BaseApiConfig {
  public static async createGroup(values: any): Promise<IApiResult> {
    const data = await axios.post('/group', values, this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async findGroup(values: any): Promise<IApiResult> {
    const data = await axios.post(
      '/group/findGroup',
      values,
      this.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async setToJoin(values: any): Promise<IApiResult> {
    const data = await axios.post(
      '/group/setToJoin',
      values,
      this.apiOptions(),
    );

    return BaseApiHandler.handleApi(data);
  }

  public static async joinRequestNotification(): Promise<IApiResult> {
    const data = await axios.get('/group/joinNotifications', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async acceptUser(values: any): Promise<IApiResult> {
    const data = await axios.post(
      '/group/acceptUser',
      values,
      this.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async rejectUser(values: any): Promise<IApiResult> {
    const data = await axios.post(
      '/group/rejectUser',
      values,
      this.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async getJoinUserNotificationCount(): Promise<IApiResult> {
    const data = await axios.get('/group/notificationCount', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async getActualMoney(): Promise<IApiResult> {
    const data = await axios.get('/group/actualMoney', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async getGroupData(): Promise<IApiResult> {
    const data = await axios.get('/group/groupData', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async getUsers(): Promise<IApiResult> {
    const data = await axios.get('/group/users', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async deleteUser(value: any): Promise<IApiResult> {
    const data = await axios.delete('/group/user', {
      ...this.apiOptions(),
      params: {
        userId: value,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async deleteGroup(): Promise<IApiResult> {
    const data = await axios.delete('/group', this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }
}
