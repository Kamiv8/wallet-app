import useForm from '../../../hooks/useForm';
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
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { ApiStatus } from '../../../models/apiResult';
import { UserApi } from '../../../api/user.api';
import { useContext } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { ActionEnum } from '../../../contexts/application.reducer';

export const LoginForm = () => {
  const appContext = useContext(ApplicationContext);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  const { values, handleChange, isDisabled } =
    useForm<typeof initialValues>(initialValues);

  const onSubmit = async () => {
    const authenticate = await AuthApi.authenticate(values);
    console.log(authenticate);
    if (authenticate.status === ApiStatus.SUCCESS) {
      const userData = await UserApi.getUserData();
      if (userData.data?.response.groupId !== null) {
        localStorage.setItem('groupId', userData.data?.response.groupId);
        localStorage.setItem('userRole', userData.data?.response.role);
        appContext.dispatch({
          type: ActionEnum.CHANGE_APPLICATION_TYPE,
          payload: {
            groupId: userData.data?.response.groupId,
            userRole: userData.data?.response.role,
          },
        });
      }
      navigate(RoutesName.ROOT);
    }
  };

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
