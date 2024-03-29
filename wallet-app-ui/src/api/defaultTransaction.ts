import { IApiResult } from '../models/apiResult';
import { BaseApiHandler } from './baseApiHandler';
import { api } from './baseAxios.config';
import {
  EditDefaultUserTransactionCommand,
  GetDefaultTransactionResponse,
  TEditDefaultUserTransactionForm,
} from '../models/apiTypes/defaultTransaction';
import { AddUserTransactionDefaultCommand } from '../models/apiTypes/transaction';

export class DefaultTransaction {
  public static async getDefaultUserTransaction(): Promise<
    IApiResult<Array<GetDefaultTransactionResponse>>
  > {
    const data = await api.get('/defaultUserTransactions');
    return BaseApiHandler.handleApi(data);
  }

  public static async addTransactionDefault(
    transactionId: string,
  ): Promise<IApiResult> {
    const command = new AddUserTransactionDefaultCommand(transactionId);
    const data = await api.post('/defaultUserTransactions/addDefault', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async editDefaultUserTransaction(
    values: TEditDefaultUserTransactionForm,
    transactionId: string,
  ): Promise<IApiResult> {
    const command = new EditDefaultUserTransactionCommand(
      transactionId,
      values.title,
      values.price,
      values.currencyId,
      values.categoryId,
      values.textColor,
      values.backgroundColor,
      values.description,
    );
    const data = await api.put('/defaultUserTransaction', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async deleteDefaultUserTransaction(
    transactionId: string,
  ): Promise<IApiResult> {
    const data = await api.delete(`/defaultTransaction/${transactionId}`);
    return BaseApiHandler.handleApi(data);
  }
}
