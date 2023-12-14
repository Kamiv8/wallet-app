import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeUserPasswordForm.styles';
import { InputField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useForm } from '../../../hooks';
import { UserApi } from '../../../api';

export const ChangeUserPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleSubmit = async () => {
    await UserApi.changePassword(values);
    navigate(RoutesName.SETTINGS);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
      <Wrapper>
        <InputField
          label={{ ...messages.changePasswordFormOldPassword }}
          variant={'dark'}
          name={'oldPassword'}
          type={'password'}
          onChange={(e) => handleChange(e, 'oldPassword')}
        />
        <InputField
          label={{ ...messages.changePasswordFormNewPassword }}
          variant={'dark'}
          type={'password'}
          name={'newPassword'}
          onChange={(e) => handleChange(e, 'newPassword')}
        />
        <InputField
          label={{ ...messages.changePasswordFormConfirmNewPassword }}
          type={'password'}
          variant={'dark'}
          name={'confirmNewPassword'}
          onChange={(e) => handleChange(e, 'confirmNewPassword')}
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
