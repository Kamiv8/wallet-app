import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TChangeForgotPasswordForm } from '../../../models/apiTypes/account';
import { changeForgotPasswordSchema } from '../../../validators/account/changeForgotPassword.validator';
import { useCallback } from 'react';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';

export const useChangeResetPasswordForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = {
    password: '',
    confirmPassword: '',
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
    await onSubmit(AuthApi.changeForgotPassword, true, {
      email: params.email,
      token: params['*'],
    });
  }, [values]);

  return {
    handleChange,
    getValidationMessage,
    handleSubmit,
    onCancel,
    values,
  };
};
