import { useEffect, useState } from 'react';
import { GetUserTransactionListResponse } from '../../../models/apiTypes/transaction';
import { useFetch, usePagination, useRwd } from '../../../hooks';
import { TransactionApi } from '../../../api';

export const useHistoryPage = () => {
  const { isDesktop } = useRwd();
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
          pageSize: isDesktop ? 10 : 4,
        }),
      );

      setState(data.data);
    })();
  }, [currentPage, isDesktop]);

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
