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
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { authenticate } from '../../../redux/slices/auth.slice';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {data: {isUserLoggedIn}} = useAppSelector(store => store.auth);
  const initialValues = {
    email: '',
    password: '',
  };
  const { values, handleChange, isDisabled } =
    useForm<typeof initialValues>(initialValues);

  const onSubmit = useCallback(async () => {
    await dispatch(authenticate(values));
    
    if(isUserLoggedIn) {
      navigate(RoutesName.ROOT);
    }
  }, [values, isUserLoggedIn]);

  return (
    <Wrapper>
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
          <StyledLink to={RoutesName.REGISTER}>
            <FormattedMessage {...messages.loginRedirectRegister} />
          </StyledLink>
        </Typography>
      </StyledFormItem>
      <StyledFormItem>
        <Typography size={'xs'} underline color={'lightBlue'}>
          <StyledLink to={RoutesName.RESET_PASSWORD}>
            <FormattedMessage {...messages.loginReset} />
          </StyledLink>
        </Typography>
      </StyledFormItem>
      <StyledButtonWrapper>
        <Button type={'button'} onClick={onSubmit} disabled={isDisabled}>
          <FormattedMessage {...messages.loginLogin} />
        </Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};
