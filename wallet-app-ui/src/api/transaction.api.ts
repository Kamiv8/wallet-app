import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import axios from 'axios';
import { BaseApiConfig } from './baseApiConfig';
import { AddUserTransactionCommand } from '../models/apiTypes/transaction/addUserTransaction/addUserTransaction.command';
import { TAddUserTransactionForm } from '../models/apiTypes/transaction/addUserTransaction/addUserTransaction.form';
import { api } from './baseAxios.config';
import { AddUserTransactionDefaultCommand } from '../models/apiTypes/transaction/addUserTransactionDefault/addUserTransactionDefault.command';
import { TPagination } from '../models/pagination';
import { GetUserTransactionListResponse } from '../models/apiTypes/transaction/getUserTransactionList/getUserTransactionList.response';
import { GetUserTransactionDetailsResponse } from '../models/apiTypes/transaction/getUserTransactionDetails/getUserTransactionDetails.response';
import { GetIncomeByCategoryResponse } from '../models/apiTypes/transaction/getIcomeByCategory/getIncomeByCategory.response';
import { GetIncomeByCategoryCommand } from '../models/apiTypes/transaction/getIcomeByCategory/getIncomeByCategory.command';
import { GetCostByCategoryResponse } from '../models/apiTypes/transaction/getCostByCategory/getCostByCategory.response';
import { GetCostByCategoryCommand } from '../models/apiTypes/transaction/getCostByCategory/getCostByCategory.command';
import { GetTransactionsByCurrencyResponse } from '../models/apiTypes/transaction/GetTransactionsByCurrency/GetTransactionsByCurrency.response';

export class TransactionApi extends BaseApiConfig {
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

  public static async getUserIncomeChartData(): Promise<IApiResult> {
    const data = await axios.get(
      '/transaction/userIncomeChart',
      this.apiOptions(),
    );
    return BaseApiHandler.handleApi(data);
  }

  public static async getUserCostChartData(): Promise<IApiResult> {
    const data = await axios.get(
      'transaction/userCostChart',
      this.apiOptions(),
    );
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

  public static async addTransaction(
    values: TAddUserTransactionForm,
  ): Promise<IApiResult> {
    const command = new AddUserTransactionCommand(
      values.title,
      values.price,
      values.currencyId,
      values.categoryId,
      values.date,
      values.isDefault,
      values.description,
      values.textColor,
      values.backgroundColor,
    );
    const data = await api.post('/transactionUser/add', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async addTransactionDefault(
    transactionId: string,
  ): Promise<IApiResult> {
    const command = new AddUserTransactionDefaultCommand(transactionId);
    const data = await api.post('/transactionUser/addDefault', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async getAllTransactions(
    pagination: TPagination,
  ): Promise<IApiResult<GetUserTransactionListResponse>> {
    const data = await api.get('/transactionUser/transactionList', {
      params: {
        'PaginationParamsDto.PageNumber': pagination.pageNumber,
        'PaginationParamsDto.PageSize': pagination.pageSize,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getLastTransactions(): Promise<
    IApiResult<GetUserTransactionListResponse>
  > {
    const data = await api.get('/transactionUser/transactionList', {
      params: {
        'PaginationParamsDto.PageNumber': 1,
        'PaginationParamsDto.PageSize': 2,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getTransactionDetails(
    transactionId: string,
  ): Promise<IApiResult<GetUserTransactionDetailsResponse>> {
    const data = await api.get('/transactionUser/details', {
      params: {
        transactionId: transactionId,
      },
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getTransactionsByCurrency(): Promise<
    IApiResult<Array<Array<GetTransactionsByCurrencyResponse>>>
  > {
    const data = await api.get('/transactionUser/transactionsByCurrency');
    return BaseApiHandler.handleApi(data);
  }

  public static async getIncomeByCategory(
    currencyId: string,
  ): Promise<IApiResult<Array<GetIncomeByCategoryResponse>>> {
    const command = new GetIncomeByCategoryCommand(currencyId);
    const data = await api.get('/transactionUser/getIncomeByCategory', {
      params: command,
    });
    return BaseApiHandler.handleApi(data);
  }

  public static async getCostByCategory(
    currencyId: string,
  ): Promise<IApiResult<Array<GetCostByCategoryResponse>>> {
    const command = new GetCostByCategoryCommand(currencyId);
    const data = await api.get('/transactionUser/getCostByCategory', {
      params: command,
    });
    return BaseApiHandler.handleApi(data);
  }
}
