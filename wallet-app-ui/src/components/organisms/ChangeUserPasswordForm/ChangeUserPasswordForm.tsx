import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeUserPasswordForm.styles';
import { InputField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useChangeUserPasswordForm } from './useChangeUserPasswordForm';

export const ChangeUserPasswordForm = () => {
  const { handleSubmit, values, getValidationMessage, handleChange, onClose } =
    useChangeUserPasswordForm();
  return (
    <CardWrapper gradientColor close={onClose}>
      <Wrapper>
        <InputField
          label={{ ...messages.changePasswordFormOldPassword }}
          variant={'dark'}
          name={'oldPassword'}
          type={'password'}
          value={values.oldPassword}
          error={getValidationMessage('oldPassword')}
          onChange={(e) => handleChange(e, 'oldPassword')}
        />
        <InputField
          label={{ ...messages.changePasswordFormNewPassword }}
          variant={'dark'}
          type={'password'}
          name={'newPassword'}
          value={values.newPassword}
          error={getValidationMessage('newPassword')}
          onChange={(e) => handleChange(e, 'newPassword')}
        />
        <InputField
          label={{ ...messages.changePasswordFormConfirmNewPassword }}
          type={'password'}
          variant={'dark'}
          name={'confirmNewPassword'}
          value={values.confirmPassword}
          error={getValidationMessage('confirmPassword')}
          onChange={(e) => handleChange(e, 'confirmPassword')}
        />
      </Wrapper>
      <ButtonWrapper>
        <Button color={'darkBlue'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonSave} />
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};
