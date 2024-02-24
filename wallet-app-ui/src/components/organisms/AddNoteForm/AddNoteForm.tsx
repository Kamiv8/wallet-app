import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './AddNoteForm.styles';
import { InputField, TextAreaField, ColorPickerField } from '../../molecules';
import messages from '../../../i18n/messages';
import { useForm } from '../../../hooks';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { colorPicker } from '../../../const/colorPicker';
import { NoteApi } from '../../../api';
import { AddUserNoteForm } from '../../../models/apiTypes/note';
import { createUserSchema } from '../../../validators/Note/CreateNote.validator';
import { ApiStatus } from '../../../models/apiResult';

export const AddNoteForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    text: '',
    textColor: colorPicker.textColor,
    backgroundColor: colorPicker.backgroundColor,
  };

  const { values, handleChange, onSubmit, getValidationMessage } =
    useForm<AddUserNoteForm>(initialValues, createUserSchema);

  const handleSubmit = async () => {
    const response = await onSubmit(NoteApi.createUserNote);
    if (response.status === ApiStatus.SUCCESS) navigate(RoutesName.TABLE);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.TABLE)}>
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
