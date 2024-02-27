import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { NoteDetailsCard } from '../../organisms';
import { useNoteDetailsPage } from './useNoteDetailsPage';

export const NoteDetailsPage = () => {
  const { state, doneNote } = useNoteDetailsPage();
  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        <FormattedMessage {...messages.detailsNotePageNoteDetails} />
      </Typography>
      <NoteDetailsCard
        title={state.title}
        text={state.textList}
        backgroundColor={state.backgroundColor}
        textColor={state.textColor}
        doneNote={doneNote}
      />
    </MainTemplate>
  );
};
