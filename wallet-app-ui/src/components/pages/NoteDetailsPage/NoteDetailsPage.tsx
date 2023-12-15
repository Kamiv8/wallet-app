import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useCallback, useEffect, useState } from 'react';
import { NoteApi, TableApi } from '../../../api';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { NoteDetailsCard } from '../../organisms';
import { useFetch } from '../../../hooks';
import { GetUserNoteDetailsResponse } from '../../../models/apiTypes/note/getUserNoteDetails/getUserNoteDetails.response';

export const NoteDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { callToApi } = useFetch();
  const [state, setState] = useState<GetUserNoteDetailsResponse>(
    {} as GetUserNoteDetailsResponse,
  );

  useEffect(() => {
    (async () => {
      const data = await callToApi(
        NoteApi.getUserNoteDetails(location.pathname.split('/').pop()!),
      );
      setState(data.data || ({} as GetUserNoteDetailsResponse));
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
        text={state.textList}
        backgroundColor={state.backgroundColor}
        textColor={state.textColor}
        doneNote={doneNote}
      />
    </MainTemplate>
  );
};
