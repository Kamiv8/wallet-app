import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../atoms';
import { ButtonsWrapper, LastButton } from './ResetPassword.styles';
import { useResetPasswordForm } from './useResetPasswordForm';

export const ResetPasswordForm = () => {
  const { handleChange, values, getValidationMessage, handleSubmit, onCancel } =
    useResetPasswordForm();
  return (
    <div>
      <InputField
        label={{ ...messages.resetPasswordPageEmail }}
        variant={'light'}
        name={'email'}
        value={values.email}
        error={getValidationMessage('email')}
        onChange={(e) => handleChange(e, 'email')}
      />

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
