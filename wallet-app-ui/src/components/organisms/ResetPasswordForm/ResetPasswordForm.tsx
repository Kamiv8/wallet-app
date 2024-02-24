import { useForm } from '../../../hooks';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../atoms';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ButtonsWrapper, LastButton } from './ResetPassword.styles';
import { AuthApi } from '../../../api';
import { resetPasswordSchema } from '../../../validators/account/resetPassword.validator';
import { TResetPasswordForm } from '../../../models/apiTypes/account';

export const ResetPasswordForm = () => {
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

  return (
    <div>
      <InputField
        label={{ ...messages.resetPasswordPageEmail }}
        variant={'light'}
        name={'email'}
        value={values.email}
        error={getValidationMessage('email')}
        onChange={(e) => handleChange(e, 'email')}
      />

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
