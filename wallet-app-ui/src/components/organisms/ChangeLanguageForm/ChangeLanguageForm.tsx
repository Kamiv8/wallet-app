import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeLanguageForm.styles';
import { SelectField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { languages, useChangeLanguageForm } from './useChangeLanguageForm';

export const ChangeLanguageForm = () => {
  const { handleSubmit, handleChange, onClose } = useChangeLanguageForm();
  return (
    <CardWrapper gradientColor close={onClose}>
      <Wrapper>
        <SelectField
          selectItems={languages}
          label={{ ...messages.changeLanguageFormLanguage }}
          name={'language'}
          onChange={handleChange}
          variant={'dark'}
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
