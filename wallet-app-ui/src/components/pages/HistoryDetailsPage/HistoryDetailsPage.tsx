import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { HistoryCardDetails } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useHistoryDetailsPage } from './useHistoryDetailsPage';

export const HistoryDetailsPage = () => {
  const { state } = useHistoryDetailsPage();
  return (
    <MainTemplate>
      <Typography size={'l'} weight={700} color={'lightBlue'} uppercase>
        <FormattedMessage {...messages.detailsTransactionPageTitle} />
      </Typography>
      <HistoryCardDetails
        title={state.title}
        category={state.categoryName}
        price={state.price}
        currency={state.currencyCode}
        description={state.description}
        date={new Date(state.date)}
        toChart={state.chartData}
      />
    </MainTemplate>
  );
};
