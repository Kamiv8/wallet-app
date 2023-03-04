import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import { FormWrapper } from './AddNoteForm.styles';
import InputField from '../../molecules/InputField/InputField';
import TextAreaField from '../../molecules/TextAreaField/TextAreaField';
import ColorPickerField from '../../molecules/ColorPickerField/ColorPickerField';
import messages from '../../../i18n/messages';
import useForm from '../../../hooks/useForm';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { TableApi } from '../../../api/table.api';
import { RoutesName } from '../../../const/routesName';

const AddNoteForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    text: '',
    textColor: '',
    backgroundColor: '',
  };

  const { values, handleChange } = useForm(initialValues);

  const handleSubmit = async () => {
    const { status } = await TableApi.createNote(values);
    if (status) {
      navigate(RoutesName.TABLE);
    }
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
        />
        <ColorPickerField
          label={{ ...messages.addNoteFormBackgroundColor }}
          color={'darkBlue'}
          onChange={(e) => handleChange(e, 'backgroundColor')}
        />
        <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};

export default AddNoteForm;
