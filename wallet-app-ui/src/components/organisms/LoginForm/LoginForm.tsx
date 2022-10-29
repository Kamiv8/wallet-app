import useForm from '../../../hooks/useForm';
import { useCallback } from 'react';
import InputField from '../../molecules/InputField/InputField';
import messages from '../../../i18n/messages';
import {
  StyledButtonWrapper,
  StyledFormItem,
  Wrapper,
} from './LoginForm.styles';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import Typography from '../../atoms/Typography/Typography';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { values, handleChange, isDisabled } =
    useForm<typeof initialValues>(initialValues);

  const onSubmit = useCallback(async () => {
    console.log(values);
  }, []);

  return (
    <Wrapper onSubmit={onSubmit}>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginEmail }}
          variant={'light'}
          name={'email'}
          onChange={(e) => handleChange(e, 'email')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginPassword }}
          variant={'light'}
          name={'password'}
          type={'password'}
          onChange={(e) => handleChange(e, 'password')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <Typography size={'xs'} underline color={'lightBlue'}>
          <FormattedMessage {...messages.loginRedirectRegister} />
        </Typography>
      </StyledFormItem>
      <StyledFormItem>
        <Typography size={'xs'} underline color={'lightBlue'}>
          <FormattedMessage {...messages.loginReset} />
        </Typography>
      </StyledFormItem>
      <StyledButtonWrapper>
        <Button type={'submit'} disabled={isDisabled}>
          <FormattedMessage {...messages.loginLogin} />
        </Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};
