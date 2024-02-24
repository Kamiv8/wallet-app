import { CardWrapper, Button } from '../../atoms';
import { InputField } from '../../molecules';
import { ButtonWrapper, Wrapper } from './ChangeUsernameForm.styles';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useForm } from '../../../hooks';
import { UserApi } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { TChangeUsernameForm } from '../../../models/apiTypes/settings';
import { changeUsernameSchema } from '../../../validators/settings/changeUsername.validator';
import { ApiStatus } from '../../../models/apiResult';

export const ChangeUsernameForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    newUsername: '',
  };

  const { values, handleChange, getValidationMessage, onSubmit } =
    useForm<TChangeUsernameForm>(initialValues, changeUsernameSchema);

  const handleSubmit = async () => {
    const response = await onSubmit(UserApi.changeUsername);
    if (response.status !== ApiStatus.SUCCESS) return;
    navigate(RoutesName.SETTINGS);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
      <Wrapper>
        <InputField
          label={{ ...messages.changeUsernameFormUsername }}
          variant={'dark'}
          name={'username'}
          value={values.newUsername}
          error={getValidationMessage('newUsername')}
          onChange={(e) => handleChange(e, 'newUsername')}
        />
        <ButtonWrapper>
          <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
            <FormattedMessage {...messages.buttonSave} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </CardWrapper>
  );
};
