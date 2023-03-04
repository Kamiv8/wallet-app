import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import AddNoteForm from '../../organisms/AddNoteForm/AddNoteForm';

const AddNotePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'} uppercase>
        <FormattedMessage {...messages.addNotePageAddNote} />
      </Typography>
      <AddNoteForm />
    </MainTemplate>
  );
};

export default AddNotePage;
