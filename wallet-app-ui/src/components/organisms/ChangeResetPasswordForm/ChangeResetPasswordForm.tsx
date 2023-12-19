import {
  ButtonsWrapper,
  InputFieldWrapper,
} from './ChangeResetPasswordForm.styles';
import { Button } from '../../atoms';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useFetch, useForm } from '../../../hooks';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { LastButton } from '../ResetPasswordForm/ResetPassword.styles';
import { AuthApi } from '../../../api';

export const ChangeResetPasswordForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { callToApi } = useFetch();
  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const { handleChange, values } = useForm(initialValues);

  const onCancel = useCallback(() => {
    navigate(RoutesName.LOGIN);
  }, []);

  const onSubmit = useCallback(async () => {
    await callToApi(
      AuthApi.changeForgotPassword({
        ...values,
        email: params.email,
        token: params['*'],
      }),
      true,
    );
  }, [values]);

  return (
    <div>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPagePassword }}
          variant={'light'}
          type={'password'}
          name={'password'}
          onChange={(e: any) => handleChange(e, 'password')}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPageConfirmPassword }}
          variant={'light'}
          type={'password'}
          name={'confirmPassword'}
          onChange={(e: any) => handleChange(e, 'confirmPassword')}
        />
      </InputFieldWrapper>
      <ButtonsWrapper>
        <Button type={'button'} onClick={onCancel}>
          <FormattedMessage {...messages.resetPasswordPageCancel} />
        </Button>
        <LastButton type={'button'} onClick={onSubmit}>
          <FormattedMessage {...messages.resetPasswordPageSent} />
        </LastButton>
      </ButtonsWrapper>
    </div>
  );
};
