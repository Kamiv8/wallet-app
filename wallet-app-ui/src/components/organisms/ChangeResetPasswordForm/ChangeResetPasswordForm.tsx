import {
  ButtonsWrapper,
  InputFieldWrapper,
} from './ChangeResetPasswordForm.styles';
import { Button } from '../../atoms';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useForm } from '../../../hooks';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { LastButton } from '../ResetPasswordForm/ResetPassword.styles';
import { AuthApi } from '../../../api';
import { changeForgotPasswordSchema } from '../../../validators/account/changeForgotPassword.validator';
import { TChangeForgotPasswordForm } from '../../../models/apiTypes/account';

export const ChangeResetPasswordForm = () => {
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

  return (
    <div>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPagePassword }}
          variant={'light'}
          type={'password'}
          name={'password'}
          error={getValidationMessage('password')}
          value={values.password}
          onChange={(e: any) => handleChange(e, 'password')}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPageConfirmPassword }}
          variant={'light'}
          type={'password'}
          name={'confirmPassword'}
          error={getValidationMessage('confirmPassword')}
          value={values.confirmPassword}
          onChange={(e: any) => handleChange(e, 'confirmPassword')}
        />
      </InputFieldWrapper>
      <ButtonsWrapper>
        <Button type={'button'} onClick={onCancel}>
          <FormattedMessage {...messages.resetPasswordPageCancel} />
        </Button>
        <LastButton type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.resetPasswordPageSent} />
        </LastButton>
      </ButtonsWrapper>
    </div>
  );
};
