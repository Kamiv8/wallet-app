import { MainTemplate } from '../../templates';
import { HistoryCardDetails } from '../../organisms';
import messages from '../../../i18n/messages';
import { useHistoryDetailsPage } from './useHistoryDetailsPage';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Content } from './HistoryDetailsPage.styles';

export const HistoryDetailsPage = () => {
  const { state } = useHistoryDetailsPage();
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.detailsTransactionPageTitle}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <Content>
        <HistoryCardDetails
          title={state.title}
          category={state.categoryName}
          price={state.price}
          currency={state.currencyCode}
          description={state.description}
          date={new Date(state.date)}
          toChart={state.chartData}
        />
      </Content>
    </MainTemplate>
  );
};
