import { useForm } from '../../../hooks';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import {
  StyledButtonWrapper,
  StyledFormItem,
  Wrapper,
} from './LoginForm.styles';
import { Button, Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { ApiStatus } from '../../../models/apiResult';
import { TAuthenticateForm } from '../../../models/apiTypes/account/authenticate/authenticate.form';
import { authenticateSchema } from '../../../validators/account/authenticate.validator';
import { LocalstorageHelper } from '../../../helpers/localstorage.helper';
import { LocalstorageEnum } from '../../../types/enums/localstorage.enum';

export const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
  };
  const { handleChange, onSubmit, getValidationMessage } =
    useForm<TAuthenticateForm>(initialValues, authenticateSchema);

  const handleSubmit = async () => {
    const authenticate = await onSubmit(AuthApi.authenticate);

    if (authenticate?.status === ApiStatus.SUCCESS) {
      LocalstorageHelper.setItem(
        LocalstorageEnum.TOKEN,
        authenticate.data?.token ?? '',
      );
      LocalstorageHelper.setItem(
        LocalstorageEnum.REFRESH_TOKEN,
        authenticate.data?.refreshToken ?? '',
      );
      navigate(RoutesName.ROOT);
    }
  };

  return (
    <Wrapper>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginUsername }}
          variant={'light'}
          name={'username'}
          error={getValidationMessage('username')}
          onChange={(e) => handleChange(e, 'username')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginPassword }}
          variant={'light'}
          name={'password'}
          error={getValidationMessage('password')}
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
        <Button type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.loginLogin} />
        </Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};
