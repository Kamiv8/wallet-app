import { useCallback, useEffect, useState } from 'react';
import { TPaginationResponse } from '../models/pagination.response';

export const usePagination = (paginationResponse?: TPaginationResponse) => {
  const [state, setState] = useState<TPaginationResponse>({
    currentPage: 1,
    pageSize: 1,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (paginationResponse) {
      setState(paginationResponse);
    }
  }, [paginationResponse]);

  const setPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const setNextPage = useCallback(() => {
    if (!state.hasNext) return;
    setCurrentPage((prev) => prev + 1);
  }, [state.hasNext]);

  const setPreviousPage = useCallback(() => {
    if (!state.hasPrevious) return;
    setCurrentPage((prev) => prev - 1);
  }, [state.hasPrevious]);

  return {
    currentPage,
    pageSize: state.pageSize,
    setPage,
    totalPages: state.totalPages,
    setNextPage,
    setPreviousPage,
    hasNext: state.hasNext,
    hasPrevious: state.hasPrevious,
  };
};
