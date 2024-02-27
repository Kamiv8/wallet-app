import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './AddNoteForm.styles';
import { InputField, TextAreaField, ColorPickerField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useAddNoteForm } from './useAddNoteForm';

export const AddNoteForm = () => {
  const { values, handleChange, handleSubmit, getValidationMessage, navigate } =
    useAddNoteForm();
  return (
    <CardWrapper gradientColor close={navigate}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addNoteFormTitle }}
          variant={'dark'}
          value={values.title}
          error={getValidationMessage('title')}
          name={'title'}
          onChange={(e) => handleChange(e, 'title')}
        />
        <TextAreaField
          label={{ ...messages.addNoteFormTodoList }}
          variant={'dark'}
          value={values.text}
          error={getValidationMessage('text')}
          onChange={(e) => handleChange(e, 'text')}
          name={'text'}
        />
        <ColorPickerField
          label={{ ...messages.addNoteFormTextColor }}
          color={'darkBlue'}
          onChange={(e) => handleChange(e, 'textColor')}
          defaultValue={values.textColor}
        />
        <ColorPickerField
          label={{ ...messages.addNoteFormBackgroundColor }}
          color={'darkBlue'}
          onChange={(e) => handleChange(e, 'backgroundColor')}
          defaultValue={values.backgroundColor}
        />
        <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
