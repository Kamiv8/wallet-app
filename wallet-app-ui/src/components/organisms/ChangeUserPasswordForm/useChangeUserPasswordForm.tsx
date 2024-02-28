import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { ChangePasswordForm } from '../../../models/apiTypes/settings';
import { changeUserPasswordValidator } from '../../../validators/settings/changeUserPassword.validator';
import { SettingsApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';
import { CustomString } from '../../../overrides/string.override';

export const useChangeUserPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    oldPassword: CustomString.Empty,
    newPassword: CustomString.Empty,
    confirmPassword: CustomString.Empty,
  };

  const { values, getValidationMessage, handleChange, onSubmit } =
    useForm<ChangePasswordForm>(initialValues, changeUserPasswordValidator);

  const handleSubmit = async () => {
    const res = await onSubmit(SettingsApi.changePassword);
    if (res.status !== ApiStatus.SUCCESS) return;
    navigate(RoutesName.SETTINGS);
  };

  return {
    handleSubmit,
    values,
    getValidationMessage,
    handleChange,
    onClose: () => navigate(RoutesName.SETTINGS),
  };
};
