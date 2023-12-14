import { CardWrapper, Button } from '../../atoms';
import { InputField } from '../../molecules';
import { ButtonWrapper, Wrapper } from './ChangeUsernameForm.styles';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useForm } from '../../../hooks';
import { UserApi } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

export const ChangeUsernameForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    newUsername: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleSubmit = async () => {
    await UserApi.changeUsername(values);
    navigate(RoutesName.SETTINGS);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
      <Wrapper>
        <InputField
          label={{ ...messages.changeUsernameFormUsername }}
          variant={'dark'}
          name={'username'}
          onChange={(e: any) => handleChange(e, 'newUsername')}
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
