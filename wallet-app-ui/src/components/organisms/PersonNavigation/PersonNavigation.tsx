import { Wrapper } from './PersonNavigation.styles';
import NavigationBox from '../../molecules/NavigationBox/NavigationBox';
import { ReactComponent as TransactionIcon } from '../../../assets/images/navigationIcons/transaction.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/images/navigationIcons/history.svg';
import { ReactComponent as TableIcon } from '../../../assets/images/navigationIcons/table.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/images/navigationIcons/settings.svg';
import { ReactComponent as ReportIcon } from '../../../assets/images/navigationIcons/pdf.svg';
import { ReactComponent as GroupIcon } from '../../../assets/images/navigationIcons/group.svg';
import { GroupRoutesName, RoutesName } from '../../../const/routesName';
import { useContext } from 'react';
import ApplicationContext from '../../../contexts/application.context';

export type TBoxes = {
  image: any;
  name: string;
  route: string;
};

const PersonNavigation = () => {
  const applicationContext = useContext(ApplicationContext);
  const boxes: TBoxes[] = [
    {
      image: TransactionIcon,
      name: 'Transaction',
      route: RoutesName.ADD_TRANSACTIONS,
    },
    {
      image: HistoryIcon,
      name: 'History',
      route: RoutesName.HISTORY,
    },
    {
      image: TableIcon,
      name: 'Table',
      route: RoutesName.TABLE,
    },
    {
      image: SettingsIcon,
      name: 'Settings',
      route: RoutesName.SETTINGS,
    },
    {
      image: ReportIcon,
      name: 'Reports',
      route: RoutesName.REPORT,
    },
    {
      image: GroupIcon,
      name: 'Group',
      route: applicationContext.state.groupId
        ? GroupRoutesName.ROOT
        : RoutesName.CREATE_FIND_GROUP,
    },
  ];

  return (
    <Wrapper>
      {boxes.map((b) => (
        <NavigationBox
          key={b.name}
          Image={b.image}
          name={b.name}
          routeName={b.route}
        />
      ))}
    </Wrapper>
  );
};

export default PersonNavigation;
