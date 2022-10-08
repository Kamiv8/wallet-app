import InputField from '../../molecules/InputField/InputField';
import AvatarPicker from '../../molecules/avatarPicker/AvatarPicker';
import messages from '../../../i18n/messages';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import Button from '../../atoms/Button/Button';
import useForm from '../../../hooks/useForm';
import {
  StyledButtonWrapper,
  StyledFormItem,
  Wrapper,
} from './RegisterForm.styles';
import { useCallback } from 'react';

export type TSelectedIcon = 0 | 1 | 2 | 3 | 4;

const RegisterForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    icon: 0 as TSelectedIcon,
  };
  const { values, handleChange, isDisabled } =
    useForm<typeof initialValues>(initialValues);

  const onSubmit = useCallback(async () => {
    console.log(values);
  }, []);

  console.log(isDisabled);
  return (
    <Wrapper onSubmit={onSubmit}>
      <StyledFormItem>
        <InputField
          label={{ ...messages.username }}
          variant={'light'}
          name={'username'}
          onChange={(e) => handleChange(e, 'username')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.email }}
          variant={'light'}
          name={'email'}
          type={'email'}
          onChange={(e) => handleChange(e, 'email')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.password }}
          variant={'light'}
          type={'password'}
          name={'password'}
          onChange={(e) => handleChange(e, 'password')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.confirmPassword }}
          variant={'light'}
          name={'confirmPassword'}
          type={'password'}
          onChange={(e) => handleChange(e, 'confirmPassword')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <AvatarPicker selected={values.icon} onClick={handleChange} />
      </StyledFormItem>
      <StyledFormItem>
        <Typography size={'xs'} underline color={'lightBlue'}>
          <FormattedMessage {...messages.redirectLogin} />
        </Typography>
      </StyledFormItem>
      <StyledButtonWrapper>
        <Button type={'submit'} disabled={isDisabled}>
          <FormattedMessage {...messages.register} />
        </Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};

export default RegisterForm;
