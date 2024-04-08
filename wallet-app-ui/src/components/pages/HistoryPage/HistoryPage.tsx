import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import {
  Container,
  NoElementsText,
  PaginationWrapper,
} from './HistoryPage.styles';
import { MainTemplate } from '../../templates';
import { Pagination, TransactionItem } from '../../molecules';
import { useHistoryPage } from './useHistoryPage';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { useRwd } from '../../../hooks';

export const HistoryPage = () => {
  const { getRwdValue } = useRwd();
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
      <AppHeaderWrapper>
        <Heading
          text={messages.historyPageHistory}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>

      <Container>
        {state?.transactionList.map((t) => (
          <TransactionItem data={t} key={t.id} />
        ))}

        {state?.transactionList.length ? (
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
        ) : (
          <NoElementsText
            size={getRwdValue('l', 'xl')}
            uppercase
            weight={700}
            color={'orange'}
          >
            <FormattedMessage {...messages.historyPageNoElements} />
          </NoElementsText>
        )}
      </Container>
    </MainTemplate>
  );
};
