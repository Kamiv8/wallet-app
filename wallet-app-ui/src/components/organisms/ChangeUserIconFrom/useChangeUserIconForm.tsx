import { useNavigate } from 'react-router-dom';
import { useFetch, useForm } from '../../../hooks';
import { UserApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';
import { UserIconTypeEnum } from '../../../types/enums';
import { ApiStatus } from '../../../models/apiResult';
import { ChangeUserIconForm } from '../../../models/apiTypes/settings';

export const useChangeUserIconForm = () => {
  const { callToApi } = useFetch();
  const navigate = useNavigate();

  const initialValues = {
    iconId: UserIconTypeEnum.Boy,
  };

  const { values, handleChange } = useForm<ChangeUserIconForm>(initialValues);

  const handleSubmit = async () => {
    const response = await callToApi(UserApi.changeIcon(values.iconId));
    if (response.status !== ApiStatus.SUCCESS) return;
    navigate(RoutesName.SETTINGS);
  };

  return {
    onClose: () => navigate(RoutesName.SETTINGS),
    handleChange,
    handleSubmit,
    values,
  };
};
