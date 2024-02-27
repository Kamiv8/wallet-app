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
import { useLoginForm } from './useLoginForm';

export const LoginForm = () => {
  const { values, handleSubmit, handleChange, getValidationMessage } =
    useLoginForm();
  return (
    <Wrapper>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginUsername }}
          variant={'light'}
          name={'username'}
          value={values.username}
          error={getValidationMessage('username')}
          onChange={(e) => handleChange(e, 'username')}
        />
      </StyledFormItem>
      <StyledFormItem>
        <InputField
          label={{ ...messages.loginPassword }}
          variant={'light'}
          name={'password'}
          value={values.password}
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
