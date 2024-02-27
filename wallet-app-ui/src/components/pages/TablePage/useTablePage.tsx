import { useFetch } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetUserNotesResponse } from '../../../models/apiTypes/note';
import { NoteApi } from '../../../api';

export const useTablePage = () => {
  const { callToApi } = useFetch();
  const navigate = useNavigate();
  const [state, setState] = useState<Array<GetUserNotesResponse>>([]);

  useEffect(() => {
    (async () => {
      const data = await callToApi(NoteApi.getAllUserNotes());
      setState(data.data || []);
    })();
  }, []);

  return {
    navigateToRoute: (noteRoute: string) => navigate(noteRoute),
    state,
  };
};
