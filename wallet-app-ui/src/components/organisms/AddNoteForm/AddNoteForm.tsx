import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './AddNoteForm.styles';
import { InputField, TextAreaField, ColorPickerField } from '../../molecules';
import messages from '../../../i18n/messages';
import { useForm } from '../../../hooks';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { colorPicker } from '../../../const/colorPicker';
import { AddUserNoteForm } from '../../../models/apiTypes/note/addUserNote/addUserNote.form';
import { NoteApi } from '../../../api';

export const AddNoteForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    text: '',
    textColor: colorPicker.textColor,
    backgroundColor: colorPicker.backgroundColor,
  };

  const { values, handleChange, onSubmit } =
    useForm<AddUserNoteForm>(initialValues);

  const handleSubmit = async () => {
    await onSubmit(NoteApi.createUserNote);
    navigate(RoutesName.TABLE);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.TABLE)}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addNoteFormTitle }}
          variant={'dark'}
          name={'title'}
          onChange={(e) => handleChange(e, 'title')}
        />
        <TextAreaField
          label={{ ...messages.addNoteFormTodoList }}
          variant={'dark'}
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
