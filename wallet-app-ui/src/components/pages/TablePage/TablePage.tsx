import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useEffect, useState } from 'react';
import { NoteApi } from '../../../api';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { TableCard } from '../../molecules';
import { GridTemplate, MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { GetUserNotesResponse } from '../../../models/apiTypes/note/getUserNotes/getUserNotes.response';
import { useFetch } from '../../../hooks';

export const TablePage = () => {
  const { callToApi } = useFetch();
  const navigate = useNavigate();
  const [state, setState] = useState<Array<GetUserNotesResponse>>([]);

  useEffect(() => {
    (async () => {
      const data = await callToApi(NoteApi.getAllUserNotes());
      setState(data.data || []);
    })();
  }, []);

  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'} uppercase>
        <FormattedMessage {...messages.tablePageTable} />
      </Typography>
      <GridTemplate>
        {state.map((item) => (
          <div key={item.id}>
            <TableCard
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              title={item.title}
              text={item.textList}
              onClick={() => navigate(`${RoutesName.TABLE}/${item.id}`)}
            />
          </div>
        ))}
      </GridTemplate>
      <StyledButton
        variant={'add'}
        onClick={() => navigate(RoutesName.ADD_NOTE)}
      />
    </MainTemplate>
  );
};
