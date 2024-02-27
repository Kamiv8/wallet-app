import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { useCallback, useEffect, useState } from 'react';
import { GetUserNoteDetailsResponse } from '../../../models/apiTypes/note';
import { NoteApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';

export const useNoteDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { callToApi } = useFetch();
  const [state, setState] = useState<GetUserNoteDetailsResponse>(
    {} as GetUserNoteDetailsResponse,
  );

  useEffect(() => {
    (async () => {
      const data = await callToApi(NoteApi.getUserNoteDetails(id as string));
      setState(data.data || ({} as GetUserNoteDetailsResponse));
    })();
  }, []);

  const doneNote = useCallback(async () => {
    const data = await NoteApi.markAsNote(id as string);
    if (data.status) {
      navigate(RoutesName.TABLE);
    }
  }, []);

  return {
    state,
    doneNote,
  };
};
