import { useNavigate } from 'react-router-dom';
import { useAppReducer, useFetch, useForm } from '../../../hooks';
import { Languages } from '../../../types/enums';
import { UserApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';
import { TSelectItem } from '../../atoms/Select/Select';
import { ChangeLanguageForm } from '../../../models/apiTypes/settings';

export const languages: TSelectItem[] = [
  {
    key: Languages.POLISH,
    description: 'Polski',
  },
  {
    key: Languages.ENGLISH,
    description: 'English',
  },
];

export const useChangeLanguageForm = () => {
  const navigate = useNavigate();
  const { changeLanguage } = useAppReducer();
  const { callToApi } = useFetch();
  const initialValue = {
    language: Languages.ENGLISH,
  };

  const { values, handleChange } = useForm<ChangeLanguageForm>(initialValue);

  const handleSubmit = async () => {
    const response = await callToApi(UserApi.changeLanguage(values));
    changeLanguage({ language: response.data?.language || Languages.ENGLISH });
    navigate(RoutesName.SETTINGS);
  };

  return {
    handleSubmit,
    handleChange,
    onClose: () => navigate(RoutesName.SETTINGS),
  };
};
