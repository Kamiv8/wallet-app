import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import { devConfig } from '../const/config';
import axios from 'axios';

export class TransactionApi {
  public static async getDefaultTransactions(): Promise<IApiResult> {
    const data = await axios.get(
      '/transaction/default',
      TransactionApi.apiOptions(),
    );

    return BaseApiHandler.handleApi(data);
  }

  public static async getLastTransactions(): Promise<IApiResult> {
    const data = await axios.get('/transaction', {
      params: {
        type: 0,
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

  public static async getMoneyChartData(): Promise<IApiResult> {
    const data = await axios.get(
      '/transaction/moneyChart',
      TransactionApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async getIncomeChartData(): Promise<IApiResult> {
    const data = await axios.get(
      '/transaction/incomeChart',
      TransactionApi.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async getCostChartData(): Promise<IApiResult> {
    const data = await axios.get(
      '/transaction/costChart',
      TransactionApi.apiOptions(),
    );
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
