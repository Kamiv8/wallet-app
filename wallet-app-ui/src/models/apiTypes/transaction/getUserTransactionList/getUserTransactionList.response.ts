import { TransactionResponse } from './transaction.response';
import { TPaginationResponse } from '../../../pagination.response';

export type GetUserTransactionListResponse = {
  transactionList: Array<TransactionResponse>;
  paginationParamsResponseDto: TPaginationResponse;
};
