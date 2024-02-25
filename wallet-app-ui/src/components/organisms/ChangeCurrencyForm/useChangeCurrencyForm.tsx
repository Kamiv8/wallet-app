import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { useForm } from '../../../hooks';
import { UserApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';

export const useChangeCurrencyForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<CurrencyDto[]>([]);
  const initialValues = {
    currencyId: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  async function getCurrencyData() {
    // const currencyData = await CurrencyApi.getCurrency();

    setState([]);
  }

  useEffect(() => {
    (async () => {
      await getCurrencyData();
    })();
  }, []);

  const onSubmit = async () => {
    await UserApi.changeCurrencies(values);
    navigate(RoutesName.SETTINGS);
  };

  return {
    state,
    handleChange,
    onSubmit,
    onClose: () => navigate(RoutesName.SETTINGS),
  };
};
