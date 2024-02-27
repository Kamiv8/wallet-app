import { InputField, AvatarPicker } from '../../molecules';
import messages from '../../../i18n/messages';
import { Typography, Button } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import {
  StyledButtonWrapper,
  StyledFormItem,
  Wrapper,
} from './RegisterForm.styles';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { useRegisterForm } from './useRegisterForm';

export type TSelectedIcon = 0 | 1 | 2 | 3 | 4;

export const RegisterForm = () => {
  const { values, onSubmitEvent, handleChange, getValidationMessage } =
    useRegisterForm();
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
