import { Wrapper } from './PersonNavigation.styles';
import { NavigationBox } from '../../molecules';
import { ReactComponent as TransactionIcon } from '../../../assets/images/navigationIcons/transaction.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/images/navigationIcons/history.svg';
import { ReactComponent as TableIcon } from '../../../assets/images/navigationIcons/table.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/images/navigationIcons/settings.svg';
import { RoutesName } from '../../../const/routesName';
import { useContext } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { ActionEnum } from '../../../contexts/application.reducer';
import { TFormattedMessage } from '../../../types/types';
import messages from '../../../i18n/messages';

export type TBoxes = {
  image: any;
  name: TFormattedMessage;
  route: string;
  action: () => void;
};

export const PersonNavigation = () => {
  const applicationContext = useContext(ApplicationContext);

  const boxes: TBoxes[] = [
    {
      image: TransactionIcon,
      name: messages.navigationPageTransaction,
      route: RoutesName.ADD_TRANSACTIONS,
      action: () => {
        applicationContext.dispatch({
          type: ActionEnum.CHANGE_APPLICATION_TYPE,
          payload: 'SINGLE',
        });
      },
    },
    {
      image: HistoryIcon,
      name: messages.navigationPageHistory,
      route: RoutesName.HISTORY,
      action: () => {
        applicationContext.dispatch({
          type: ActionEnum.CHANGE_APPLICATION_TYPE,
          payload: 'SINGLE',
        });
      },
    },
    {
      image: TableIcon,
      name: messages.navigationTable,
      route: RoutesName.TABLE,
      action: () => {
        applicationContext.dispatch({
          type: ActionEnum.CHANGE_APPLICATION_TYPE,
          payload: 'SINGLE',
        });
      },
    },
    {
      image: SettingsIcon,
      name: messages.navigationPageSettings,
      route: RoutesName.SETTINGS,
      action: () => {
        applicationContext.dispatch({
          type: ActionEnum.CHANGE_APPLICATION_TYPE,
          payload: 'SINGLE',
        });
      },
    },
    // {
    //   image: ReportIcon,
    //   name: 'Reports',
    //   route: RoutesName.REPORT,
    //   action: () => {
    //     applicationContext.dispatch({
    //       type: ActionEnum.CHANGE_APPLICATION_TYPE,
    //       payload: 'SINGLE',
    //     });
    //   },
    // },
    // {
    //   image: GroupIcon,
    //   name: 'Group',
    //   route: applicationContext.state.groupId
    //     ? GroupRoutesName.ROOT
    //     : RoutesName.CREATE_FIND_GROUP,
    //   action: () => {
    //     applicationContext.dispatch({
    //       type: ActionEnum.CHANGE_APPLICATION_TYPE,
    //       payload: 'GROUP',
    //     });
    //   },
    // },
  ];

  return (
    <Wrapper>
      {boxes.map((b) => (
        <NavigationBox
          key={b.name.id}
          Image={b.image}
          name={b.name}
          routeName={b.route}
          action={b.action}
        />
      ))}
    </Wrapper>
  );
};
