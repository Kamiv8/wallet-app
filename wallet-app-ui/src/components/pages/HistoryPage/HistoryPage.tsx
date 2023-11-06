import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { PaginationWrapper } from './HistoryPage.styles';
import TransactionItem from '../../molecules/TransactionItem/TransactionItem';
import Pagination from '../../molecules/Pagination/Pagination';
import { useContext, useEffect, useState } from 'react';
import { PageResult } from '../../../models/resources/pageResult';
import { Transaction } from '../../../models/resources/transaction';
import { usePagination } from 'react-use-pagination';
import { TransactionApi } from '../../../api/transaction.api';
import ApplicationContext from '../../../contexts/application.context';
import { getApplicationType } from '../../../helpers/checkIsGroup.helper';

const HistoryPage = () => {
  const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<PageResult<Transaction> | null>();
  const pagination = usePagination({
    totalItems: state?.count || 5,
    initialPageSize: 4,
    initialPage: 0,
  });

  useEffect(() => {
    (async () => {
      const transactions = await TransactionApi.getTransactions({
        type: getApplicationType(appContext.state.type),
        pageSize: 3,
        pageNumber: pagination.currentPage + 1,
      });
      setState(transactions.data?.response);
    })();
  }, [pagination.currentPage]);

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
      {state?.items.map((t) => (
        <TransactionItem data={t} key={t.id} />
      ))}
      <PaginationWrapper>
        <Pagination pagination={pagination} />
      </PaginationWrapper>
    </MainTemplate>
  );
};

export default HistoryPage;
