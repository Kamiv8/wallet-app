import { CardWrapper, Typography, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeUserIconForm.styles';
import { AvatarPicker } from '../../molecules';
import { useForm } from '../../../hooks';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { UserApi } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

export const ChangeUserIconForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    iconId: 1 as 1 | 2 | 3 | 4,
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleSubmit = async () => {
    const command = {
      iconId: values.iconId,
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
            selected={values.iconId}
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
