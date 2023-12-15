import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TransactionApi } from '../../../api';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { HistoryCardDetails } from '../../organisms';
import { useFetch } from '../../../hooks';
import { GetUserTransactionDetailsResponse } from '../../../models/apiTypes/transaction/getUserTransactionDetails/getUserTransactionDetails.response';

export const HistoryDetailsPage = () => {
  const location = useLocation();
  const { callToApi } = useFetch();

  const [state, setState] = useState<GetUserTransactionDetailsResponse>({
    id: '',
    title: '',
    categoryName: '',
    price: 0,
    date: new Date(),
    currencyCode: '',
    chartData: {
      all: 0,
      currentCategory: 0,
    },
  });

  useEffect(() => {
    (async () => {
      const parsedId = location.pathname.split('/');
      const data = await callToApi(
        TransactionApi.getTransactionDetails(parsedId[2]),
      );
      if (!data.data) return;
      setState(data.data);
    })();
  }, []);

  return (
    <MainTemplate>
      <Typography size={'l'} weight={700} color={'lightBlue'} uppercase>
        Transaction details
      </Typography>
      <HistoryCardDetails
        title={state.title}
        category={state.categoryName}
        price={state.price}
        currency={state.currencyCode}
        date={new Date(state.date)}
        toChart={state.chartData}
      />
    </MainTemplate>
  );
};
