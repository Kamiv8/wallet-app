import messages from '../../../i18n/messages';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { RoutesName } from '../../../const';
import { TableCard } from '../../molecules';
import { GridTemplate, MainTemplate } from '../../templates';
import { useTablePage } from './useTablePage';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Content } from './TablePage.styles';
import { useRwd } from '../../../hooks';

export const TablePage = () => {
  const { getRwdValue } = useRwd();
  const { state, navigateToRoute } = useTablePage();
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading text={messages.tablePageTable} type={HeadingEnum.SUB_APP} />
      </AppHeaderWrapper>
      <Content>
        <GridTemplate columns={getRwdValue(2, 2, 3, 4)}>
          {state.map((item) => (
            <div key={item.id}>
              <TableCard
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
                title={item.title}
                text={item.textList}
                onClick={() =>
                  navigateToRoute(`${RoutesName.TABLE}/${item.id}`)
                }
              />
            </div>
          ))}
        </GridTemplate>
        <StyledButton
          variant={'add'}
          onClick={() => navigateToRoute(RoutesName.ADD_NOTE)}
        />
      </Content>
    </MainTemplate>
  );
};
