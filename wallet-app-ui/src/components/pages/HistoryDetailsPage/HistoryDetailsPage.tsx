import Typography from '../../atoms/Typography/Typography';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import HistoryCardDetails from '../../organisms/HistoryCardDetails/HistoryCardDetails';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Currency } from '../../../models/resources/currency';
import { TransactionDetails } from '../../../models/resources/TransactionDetails';
import { ToPieChartDto } from '../../../models/dtos/toPieChartDto';
import { TransactionApi } from '../../../api/transaction.api';
import { Category } from '../../../models/resources/category';

const HistoryDetailsPage = () => {
  const location = useLocation();

  const [state, setState] = useState<TransactionDetails>({
    id: '',
    title: '',
    category: {
      id: '',
      name: '',
    } as Category,
    price: 0,
    date: new Date(),
    currency: {
      id: '',
      name: '',
      exchangeRate: 0,
      mark: 'PLN',
    } as Currency,
    percentage: {
      byCategory: [] as ToPieChartDto[],
    },
  });

  useEffect(() => {
    (async () => {
      const parsedId = location.pathname.split('/');
      const data = await TransactionApi.getTransactionDetails(parsedId[2]);
      setState(data?.data);
    })();
  }, []);

  return (
    <MainTemplate>
      <Typography size={'l'} weight={700} color={'lightBlue'} uppercase>
        Transaction details
      </Typography>
      <HistoryCardDetails
        title={state.title}
        category={state.category}
        price={state.price}
        currency={state.currency}
        date={new Date(state.date)}
        toChart={state?.percentage.byCategory}
      />
    </MainTemplate>
  );
};

export default HistoryDetailsPage;
