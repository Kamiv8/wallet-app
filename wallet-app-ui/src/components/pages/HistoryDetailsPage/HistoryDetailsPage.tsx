import Typography from '../../atoms/Typography/Typography';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import HistoryCardDetails from '../../organisms/HistoryCardDetails/HistoryCardDetails';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrencyMark } from '../../../models/resources/currency';
import { TransactionDetails } from '../../../models/resources/TransactionDetails';
import { ToPieChartDto } from '../../../models/dtos/toPieChartDto';
import { api } from '../../../helpers/fetch.helper';

const HistoryDetailsPage = () => {
  const location = useLocation();

  const [state, setState] = useState<TransactionDetails>({
    id: '',
    title: '',
    category: '',
    price: 0,
    date: new Date(),
    currencyMark: '' as CurrencyMark,
    percentage: {
      byCategory: [] as ToPieChartDto[],
    },
  });

  useEffect(() => {
    (async () => {
      const parsedId = location.pathname.split('/');
      const data = await api.get(`/transaction/${parsedId[2]}`);
      if (data.status === 200) {
        setState(data.data);
        console.log(data);
      }
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
        currency={{
          id: '2',
          name: 'Polski złoty',
          mark: state.currencyMark as CurrencyMark,
        }}
        date={new Date(state.date)}
        toChart={state?.percentage.byCategory}
      />
    </MainTemplate>
  );
};

export default HistoryDetailsPage;
