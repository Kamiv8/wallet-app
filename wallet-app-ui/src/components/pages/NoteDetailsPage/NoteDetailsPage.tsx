import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import NoteDetailsCard from '../../organisms/NoteDetailsCard/NoteDetailsCard';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../../models/resources/note';
import { TableApi } from '../../../api/table.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

const NoteDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState<Note>({} as Note);

  useEffect(() => {
    (async () => {
      const data = await TableApi.getNoteDetails(
        location.pathname.split('/').pop()!,
      );
      if (data.status) {
        setState(data.data?.response);
      }
    })();
  }, []);

  const doneNote = useCallback(async () => {
    const data = await TableApi.markNoteAsDone(
      location.pathname.split('/').pop()!,
    );
    if (data.status) {
      navigate(RoutesName.TABLE);
    }
  }, []);

  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        <FormattedMessage {...messages.detailsNotePageNoteDetails} />
      </Typography>
      <NoteDetailsCard
        title={state.title}
        text={state.text}
        backgroundColor={state.backgroundColor}
        textColor={state.textColor}
        doneNote={doneNote}
      />
    </MainTemplate>
  );
};

export default NoteDetailsPage;
