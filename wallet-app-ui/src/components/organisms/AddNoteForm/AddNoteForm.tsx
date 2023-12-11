import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './AddNoteForm.styles';
import { InputField, TextAreaField, ColorPickerField } from '../../molecules';
import messages from '../../../i18n/messages';
import useForm from '../../../hooks/useForm';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { TableApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';
import { colorPicker } from '../../../const/colorPicker';
import { useContext } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { getApplicationType } from '../../../helpers/checkIsGroup.helper';

export const AddNoteForm = () => {
  const appContext = useContext(ApplicationContext);
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    text: '',
    textColor: colorPicker.textColor,
    backgroundColor: colorPicker.backgroundColor,
  };

  const { values, handleChange } = useForm(initialValues);

  const handleSubmit = async () => {
    const command = {
      ...values,
      type: getApplicationType(appContext.state.type),
    };

    const { status } = await TableApi.createNote(command);
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
