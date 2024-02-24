import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeUserPasswordForm.styles';
import { InputField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useForm } from '../../../hooks';
import { SettingsApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { ChangePasswordForm } from '../../../models/apiTypes/settings';
import { changeUserPasswordValidator } from '../../../validators/settings/changeUserPassword.validator';

export const ChangeUserPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const { values, getValidationMessage, handleChange, onSubmit } =
    useForm<ChangePasswordForm>(initialValues, changeUserPasswordValidator);

  const handleSubmit = async () => {
    const res = await onSubmit(SettingsApi.changePassword);
    if (res.status === ApiStatus.SUCCESS) {
      navigate(RoutesName.SETTINGS);
    }
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
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
