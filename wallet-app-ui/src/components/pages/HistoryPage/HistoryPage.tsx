import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { PaginationWrapper } from './HistoryPage.styles';
import { useEffect, useState } from 'react';
import { TransactionApi } from '../../../api';
// import ApplicationContext from '../../../contexts/application.context';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { Pagination, TransactionItem } from '../../molecules';
import { GetUserTransactionListResponse } from '../../../models/apiTypes/transaction/getUserTransactionList/getUserTransactionList.response';
import { useFetch, usePagination } from '../../../hooks';

export const HistoryPage = () => {
  // const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<GetUserTransactionListResponse | null>();
  const {
    currentPage,
    setPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    hasNext,
    hasPrevous,
  } = usePagination(state?.paginationParamsResponseDto);
  const { callToApi } = useFetch();

  useEffect(() => {
    (async () => {
      const data = await callToApi(
        TransactionApi.getAllTransactions({
          pageNumber: currentPage,
          pageSize: 5,
        }),
      );

      setState(data.data);
    })();
  }, [currentPage]);

  return (
    <MainTemplate>
      <Typography
        size={'l'}
        uppercase
        weight={700}
        color={'lightBlue'}
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.historyPageHistory} />
      </Typography>
      {/*<SelectWrapper>*/}
      {/*  <Select items={[]} name={'Filter'} />*/}
      {/*  <Select items={[]} name={'Sort'} />*/}
      {/*</SelectWrapper>*/}
      {state?.transactionList.map((t) => (
        <TransactionItem data={t} key={t.id} />
      ))}
      <PaginationWrapper>
        <Pagination
          hasNext={hasNext}
          hasPrevious={hasPrevous}
          setPage={setPage}
          currentPage={currentPage}
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
          totalPages={totalPages}
        />
      </PaginationWrapper>
    </MainTemplate>
  );
};
