import { useFetch } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TransactionApi } from '../../../api';
import { CustomString } from '../../../overrides/string.override';

export const useHistoryDetailsPage = () => {
  const { callToApi } = useFetch();
  const { id } = useParams();

  const initialState = {
    id: CustomString.Empty,
    title: CustomString.Empty,
    categoryName: CustomString.Empty,
    price: 0,
    date: new Date(),
    currencyCode: CustomString.Empty,
    description: CustomString.Empty,
    chartData: {
      all: 0,
      currentCategory: 0,
    },
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  useEffect(() => {
    (async () => {
      const data = await callToApi(
        TransactionApi.getTransactionDetails(id as string),
      );
      if (!data.data) return;
      setState((prev) => ({ ...prev, ...data.data }));
    })();
  }, []);

  return {
    state,
  };
};
