import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import { ButtonWrapper, Wrapper } from './ChangeUserIconForm.styles';
import AvatarPicker from '../../molecules/avatarPicker/AvatarPicker';
import useForm from '../../../hooks/useForm';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { UserApi } from '../../../api/user.api';
import Typography from '../../atoms/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

const ChangeUserIconForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    icon: 1,
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleSubmit = async () => {
    const command = {
      iconId: values.icon,
    };
    await UserApi.changeIcon(command);
    navigate(RoutesName.SETTINGS);
  };

  return (
    <>
      <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
        <Wrapper>
          <label>
            <Typography size={'m'} weight={700} color={'darkBlue'}>
              Available avatars
            </Typography>
          </label>
          <AvatarPicker
            selected={values.icon}
            onClick={handleChange}
            variant={'single'}
          />
          <ButtonWrapper>
            <Button color={'darkBlue'} onClick={handleSubmit}>
              <FormattedMessage {...messages.buttonSave} />
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </CardWrapper>
    </>
  );
};

export default ChangeUserIconForm;
