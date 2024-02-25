import {
  ButtonsWrapper,
  InputFieldWrapper,
} from './ChangeResetPasswordForm.styles';
import { Button } from '../../atoms';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { LastButton } from '../ResetPasswordForm/ResetPassword.styles';
import { useChangeResetPasswordForm } from './useChangeResetPasswordForm';

export const ChangeResetPasswordForm = () => {
  const { handleChange, getValidationMessage, handleSubmit, onCancel, values } =
    useChangeResetPasswordForm();
  return (
    <div>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPagePassword }}
          variant={'light'}
          type={'password'}
          name={'password'}
          error={getValidationMessage('password')}
          value={values.password}
          onChange={(e) => handleChange(e, 'password')}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label={{ ...messages.changeResetPasswordPageConfirmPassword }}
          variant={'light'}
          type={'password'}
          name={'confirmPassword'}
          error={getValidationMessage('confirmPassword')}
          value={values.confirmPassword}
          onChange={(e) => handleChange(e, 'confirmPassword')}
        />
      </InputFieldWrapper>
      <ButtonsWrapper>
        <Button type={'button'} onClick={onCancel}>
          <FormattedMessage {...messages.resetPasswordPageCancel} />
        </Button>
        <LastButton type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.resetPasswordPageSent} />
        </LastButton>
      </ButtonsWrapper>
    </div>
  );
};
