import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { ChangePasswordForm } from '../../../models/apiTypes/settings';
import { changeUserPasswordValidator } from '../../../validators/settings/changeUserPassword.validator';
import { SettingsApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';

export const useChangeUserPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const { values, getValidationMessage, handleChange, onSubmit } =
    useForm<ChangePasswordForm>(initialValues, changeUserPasswordValidator);

  const handleSubmit = async () => {
    const res = await onSubmit(SettingsApi.changePassword);
    if (res.status === ApiStatus.SUCCESS) {
      navigate(RoutesName.SETTINGS);
    }
  };

  return {
    handleSubmit,
    values,
    getValidationMessage,
    handleChange,
    onClose: () => navigate(RoutesName.SETTINGS),
  };
};
