import { useEffect, useState } from 'react';
import { GetUserTransactionListResponse } from '../../../models/apiTypes/transaction';
import { useFetch, usePagination } from '../../../hooks';
import { TransactionApi } from '../../../api';

export const useHistoryPage = () => {
  const [state, setState] = useState<GetUserTransactionListResponse | null>();
  const {
    currentPage,
    setPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    hasNext,
    hasPrevious,
  } = usePagination(state?.paginationParamsResponseDto);
  const { callToApi } = useFetch();

  useEffect(() => {
    (async () => {
      const data = await callToApi(
        TransactionApi.getAllTransactions({
          pageNumber: currentPage,
          pageSize: 4,
        }),
      );

      setState(data.data);
    })();
  }, [currentPage]);

  return {
    setPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    hasNext,
    hasPrevious,
    currentPage,
    state,
  };
};
