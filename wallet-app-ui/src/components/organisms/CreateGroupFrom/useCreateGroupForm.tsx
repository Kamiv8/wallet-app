import { useEffect, useState } from 'react';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { GroupApi } from '../../../api';
import { TSelectItem } from '../../atoms/Select/Select';
import { RoutesName } from '../../../const/routesName';

export const maxGroupMember: TSelectItem[] = [
  {
    key: 2,
    description: '2',
  },
  {
    key: 3,
    description: '3',
  },
  {
    key: 5,
    description: '5',
  },
  {
    key: 10,
    description: '10',
  },
];
export const useCreateGroupForm = () => {
  const [currencies, setCurrencies] = useState<CurrencyDto[]>([]);
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    maxMembers: 2,
    icon: 1 as 1 | 2 | 3 | 4,
    currencyId: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  useEffect(() => {
    (async () => {
      // const data = await CurrencyApi.getCurrency();
      setCurrencies([]);
    })();
  }, []);

  const onSubmit = async () => {
    const data = await GroupApi.createGroup(values);
    localStorage.setItem('groupId', data.data?.response.groupId.toString());
    localStorage.setItem('userRole', data.data?.response.role);
  };

  return {
    currencies,
    onSubmit,
    handleChange,
    onClose: () => navigate(RoutesName.CREATE_FIND_GROUP),
  };
};
