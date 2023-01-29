import useForm from '../../../hooks/useForm';
import InputField from '../../molecules/InputField/InputField';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import Button from '../../atoms/Button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ButtonsWrapper, LastButton } from './ResetPassword.styles';
import { AuthApi } from '../../../api/auth.api';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
  };

  const { handleChange, values, isDisabled } =
    useForm<typeof initialValues>(initialValues);

  const onSubmit = useCallback(async () => {
    await AuthApi.resetPassword(values);
  }, [values]);

  const onCancel = useCallback(() => {
    navigate(RoutesName.LOGIN);
  }, []);

  return (
    <div>
      <InputField
        label={{ ...messages.resetPasswordPageEmail }}
        variant={'light'}
        name={'email'}
        onChange={(e) => handleChange(e, 'email')}
      />

      <ButtonsWrapper>
        <Button type={'button'} onClick={onCancel}>
          <FormattedMessage {...messages.resetPasswordPageCancel} />
        </Button>
        <LastButton type={'button'} onClick={onSubmit} disabled={isDisabled}>
          <FormattedMessage {...messages.resetPasswordPageSent} />
        </LastButton>
      </ButtonsWrapper>
    </div>
  );
};

export default ResetPasswordForm;
