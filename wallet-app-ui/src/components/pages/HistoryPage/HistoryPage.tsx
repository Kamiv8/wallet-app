import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Select from '../../atoms/Select/Select';
import { PaginationWrapper, SelectWrapper } from './HistoryPage.styles';
import { transactionData } from '../../../mockData/transactionData';
import TransactionItem from '../../molecules/TransactionItem/TransactionItem';
import Pagination from '../../molecules/Pagination/Pagination';

const HistoryPage = () => {
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
      {transactionData.map((t) => (
        <TransactionItem data={t} />
      ))}
      <PaginationWrapper>
        <Pagination totalItems={transactionData.length} initialPageSize={3} />
      </PaginationWrapper>
    </MainTemplate>
  );
};

export default HistoryPage;
