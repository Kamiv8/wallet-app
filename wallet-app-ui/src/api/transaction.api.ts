import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import axios from 'axios';
import { BaseApiConfig } from './baseApiConfig';
import { AppTypeEnum } from '../types/enums/appType.enum';

export class TransactionApi extends BaseApiConfig {
  public static async getDefaultTransactions(): Promise<IApiResult> {
    const data = await axios.get('/transaction/default', this.apiOptions());

    return BaseApiHandler.handleApi(data);
  }

  public static async getLastTransactions(
    type: AppTypeEnum,
  ): Promise<IApiResult> {
    const data = await axios.get('/transaction', {
      params: {
        type,
        pageSize: 2,
        pageNumber: 1,
      },
      ...TransactionApi.apiOptions(),
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getTransactionDetails(transactionId: string) {
    const data = await axios.get(
      `/transaction/${transactionId}`,
      TransactionApi.apiOptions(),
    );

    return BaseApiHandler.handleApi(data);
  }

  public static async getMoneyChartData(type: any): Promise<IApiResult> {
    const data = await axios.get('/transaction/moneyChart', {
      ...TransactionApi.apiOptions(),
      params: {
        type,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getIncomeChartData(type: any): Promise<IApiResult> {
    const data = await axios.get('/transaction/incomeChart', {
      ...TransactionApi.apiOptions(),
      params: {
        type,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getCostChartData(type: any): Promise<IApiResult> {
    const data = await axios.get('/transaction/costChart', {
      ...TransactionApi.apiOptions(),
      params: {
        type,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getTransactions(values: any): Promise<IApiResult> {
    const data = await axios.get('/transaction', {
      ...TransactionApi.apiOptions(),
      params: values,
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async addTransaction(values: any): Promise<IApiResult> {
    const data = await axios.post(
      '/transaction/add',
      values,
      TransactionApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }
}
