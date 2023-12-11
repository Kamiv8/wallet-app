import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../../models/resources/note';
import { TableApi } from '../../../api';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { NoteDetailsCard } from '../../organisms';

export const NoteDetailsPage = () => {
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
