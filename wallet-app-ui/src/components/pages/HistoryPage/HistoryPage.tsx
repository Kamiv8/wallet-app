import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { PaginationWrapper } from './HistoryPage.styles';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { Pagination, TransactionItem } from '../../molecules';
import { useHistoryPage } from './useHistoryPage';

export const HistoryPage = () => {
  const {
    setPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    hasNext,
    hasPrevious,
    currentPage,
    state,
  } = useHistoryPage();
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
      {state?.transactionList.map((t) => (
        <TransactionItem data={t} key={t.id} />
      ))}
      <PaginationWrapper>
        <Pagination
          hasNext={hasNext}
          hasPrevious={hasPrevious}
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
