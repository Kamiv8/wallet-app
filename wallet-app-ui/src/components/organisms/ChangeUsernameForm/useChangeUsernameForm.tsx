import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TChangeUsernameForm } from '../../../models/apiTypes/settings';
import { changeUsernameSchema } from '../../../validators/settings/changeUsername.validator';
import { UserApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';
import { CustomString } from '../../../overrides/string.override';

export const useChangeUsernameForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    newUsername: CustomString.Empty,
  };

  const { values, handleChange, getValidationMessage, onSubmit } =
    useForm<TChangeUsernameForm>(initialValues, changeUsernameSchema);

  const handleSubmit = async () => {
    const response = await onSubmit(UserApi.changeUsername);
    if (response.status !== ApiStatus.SUCCESS) return;
    navigate(RoutesName.SETTINGS);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    getValidationMessage,
    onClose: () => navigate(RoutesName.SETTINGS),
  };
};
