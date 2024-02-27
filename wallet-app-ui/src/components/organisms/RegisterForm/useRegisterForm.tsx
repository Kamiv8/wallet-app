import { useForm, useModalAction } from '../../../hooks';
import { useMemo } from 'react';
import { TRegisterForm } from '../../../models/apiTypes/account';
import { registerSchema } from '../../../validators/account/register.validator';
import { AuthApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { TSelectedIcon } from './RegisterForm';

export const useRegisterForm = () => {
  const { openRegisterModal } = useModalAction();
  const initialValues = useMemo(
    () => ({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      iconId: 1 as TSelectedIcon,
    }),
    [],
  );

  const { values, handleChange, onSubmit, getValidationMessage, resetForm } =
    useForm<TRegisterForm>(initialValues, registerSchema);

  const onSubmitEvent = async () => {
    const result = await onSubmit<null>(AuthApi.register);

    if (result?.status === ApiStatus.SUCCESS) {
      openRegisterModal();
      resetForm();
    }
  };

  return {
    values,
    onSubmitEvent,
    handleChange,
    getValidationMessage,
  };
};
