import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TResetPasswordForm } from '../../../models/apiTypes/account';
import { resetPasswordSchema } from '../../../validators/account/resetPassword.validator';
import { useCallback } from 'react';
import { AuthApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';

export const useResetPasswordForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
  };

  const { handleChange, values, onSubmit, getValidationMessage } =
    useForm<TResetPasswordForm>(initialValues, resetPasswordSchema);

  const handleSubmit = useCallback(async () => {
    await onSubmit(AuthApi.resetPassword, true);
  }, [onSubmit]);

  const onCancel = useCallback(() => {
    navigate(RoutesName.LOGIN);
  }, []);

  return {
    handleChange,
    values,
    getValidationMessage,
    handleSubmit,
    onCancel,
  };
};
