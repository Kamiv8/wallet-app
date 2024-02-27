import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { RoutesName } from '../../../const/routesName';
import { TableCard } from '../../molecules';
import { GridTemplate, MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { useTablePage } from './useTablePage';

export const TablePage = () => {
  const { state, navigateToRoute } = useTablePage();
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
              onClick={() => navigateToRoute(`${RoutesName.TABLE}/${item.id}`)}
            />
          </div>
        ))}
      </GridTemplate>
      <StyledButton
        variant={'add'}
        onClick={() => navigateToRoute(RoutesName.ADD_NOTE)}
      />
    </MainTemplate>
  );
};
