import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useEffect, useState } from 'react';
import { Note } from '../../../models/resources/note';
import { TableApi } from '../../../api/table.api';
import GridTemplate from '../../templates/GridTemplate/GridTemplate';
import TableCard from '../../molecules/TableCard/TableCard';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

const TablePage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<Note[]>([]);

  useEffect(() => {
    (async () => {
      const data = await TableApi.getAllNotes();
      setState(data.data);
    })();
  }, []);

  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'} uppercase>
        <FormattedMessage {...messages.tablePageTable} />
      </Typography>
      <GridTemplate>
        {state.map((item) => (
          <div>
            <TableCard
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              title={item.title}
              text={item.text}
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

export default TablePage;
