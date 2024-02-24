import { InputField, AvatarPicker } from '../../molecules';
import messages from '../../../i18n/messages';
import { Typography, Button } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { useForm, useModalAction } from '../../../hooks';
import {
  StyledButtonWrapper,
  StyledFormItem,
  Wrapper,
} from './RegisterForm.styles';
import { useMemo } from 'react';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { TRegisterForm } from '../../../models/apiTypes/account';
import { registerSchema } from '../../../validators/account/register.validator';

export type TSelectedIcon = 0 | 1 | 2 | 3 | 4;

export const RegisterForm = () => {
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

  return (
    <Wrapper>
      <StyledFormItem>
        <InputField
          label={{ ...messages.username }}
          variant={'light'}
          name={'username'}
          value={values.username}
          error={getValidationMessage('username')}
          onChange={(e) => handleChange(e, 'username')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.email }}
          variant={'light'}
          name={'email'}
          value={values.email}
          error={getValidationMessage('email')}
          type={'email'}
          onChange={(e) => handleChange(e, 'email')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.password }}
          variant={'light'}
          error={getValidationMessage('password')}
          type={'password'}
          value={values.password}
          name={'password'}
          onChange={(e) => handleChange(e, 'password')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.confirmPassword }}
          variant={'light'}
          name={'confirmPassword'}
          value={values.confirmPassword}
          error={getValidationMessage('confirmPassword')}
          type={'password'}
          onChange={(e) => handleChange(e, 'confirmPassword')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <AvatarPicker
          variant={'single'}
          selected={values.iconId}
          onClick={handleChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <Typography size={'xs'} underline color={'lightBlue'}>
          <StyledLink to={RoutesName.LOGIN}>
            <FormattedMessage {...messages.redirectLogin} />
          </StyledLink>
        </Typography>
      </StyledFormItem>
      <StyledButtonWrapper>
        <Button type={'button'} onClick={onSubmitEvent}>
          <FormattedMessage {...messages.register} />
        </Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};
