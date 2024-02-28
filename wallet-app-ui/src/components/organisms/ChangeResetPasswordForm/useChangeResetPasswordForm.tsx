import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TChangeForgotPasswordForm } from '../../../models/apiTypes/account';
import { changeForgotPasswordSchema } from '../../../validators/account/changeForgotPassword.validator';
import { useCallback } from 'react';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';
import { CustomString } from '../../../overrides/string.override';

export const useChangeResetPasswordForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = {
    password: CustomString.Empty,
    confirmPassword: CustomString.Empty,
    email: params.email,
    token: params.token,
  };

  const { handleChange, values, getValidationMessage, onSubmit } =
    useForm<TChangeForgotPasswordForm>(
      initialValues,
      changeForgotPasswordSchema,
    );

  const onCancel = useCallback(() => {
    navigate(RoutesName.LOGIN);
  }, []);

  const handleSubmit = useCallback(async () => {
    await onSubmit(AuthApi.changeForgotPassword, true);
  }, [values]);

  return {
    handleChange,
    getValidationMessage,
    handleSubmit,
    onCancel,
    values,
  };
};
