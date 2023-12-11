import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { AddNoteForm } from '../../organisms';

export const AddNotePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'} uppercase>
        <FormattedMessage {...messages.addNotePageAddNote} />
      </Typography>
      <AddNoteForm />
    </MainTemplate>
  );
};
