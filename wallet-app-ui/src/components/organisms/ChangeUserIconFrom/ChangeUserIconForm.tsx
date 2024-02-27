import { CardWrapper, Typography, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeUserIconForm.styles';
import { AvatarPicker } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useChangeUserIconForm } from './useChangeUserIconForm';

export const ChangeUserIconForm = () => {
  const { handleChange, handleSubmit, onClose, values } =
    useChangeUserIconForm();

  return (
    <>
      <CardWrapper gradientColor close={onClose}>
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
