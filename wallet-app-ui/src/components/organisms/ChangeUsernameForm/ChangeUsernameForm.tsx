import { CardWrapper, Button } from '../../atoms';
import { InputField } from '../../molecules';
import { ButtonWrapper, Wrapper } from './ChangeUsernameForm.styles';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useChangeUsernameForm } from './useChangeUsernameForm';

export const ChangeUsernameForm = () => {
  const { values, handleChange, handleSubmit, getValidationMessage, onClose } =
    useChangeUsernameForm();
  return (
    <CardWrapper gradientColor close={onClose}>
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
