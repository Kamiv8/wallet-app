import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Select from '../../atoms/Select/Select';
import { PaginationWrapper, SelectWrapper } from './HistoryPage.styles';
import TransactionItem from '../../molecules/TransactionItem/TransactionItem';
import Pagination from '../../molecules/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { PageResult } from '../../../models/resources/pageResult';
import { Transaction } from '../../../models/resources/transaction';
import { api } from '../../../helpers/fetch.helper';
import { usePagination } from 'react-use-pagination';
import { AxiosResponse } from 'axios';

const HistoryPage = () => {
  const [state, setState] = useState<PageResult<Transaction> | null>();
  const pagination = usePagination({
    totalItems: state?.count || 5,
    initialPageSize: 4,
    initialPage: 1,
  });

  useEffect(() => {
    (async () => {
      const data: AxiosResponse<any, PageResult<Transaction>> = await api.get(
        '/transaction',
        {
          params: {
            type: 0,
            pageSize: 3,
            pageNumber: pagination.currentPage + 1,
          },
        },
      );
      setState(data.data);
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
      <SelectWrapper>
        <Select items={[]} name={'Filter'} />
        <Select items={[]} name={'Sort'} />
      </SelectWrapper>
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
