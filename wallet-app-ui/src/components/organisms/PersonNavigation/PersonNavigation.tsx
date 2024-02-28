import { Wrapper } from './PersonNavigation.styles';
import { NavigationBox } from '../../molecules';
import { ReactComponent as TransactionIcon } from '../../../assets/images/navigationIcons/transaction.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/images/navigationIcons/history.svg';
import { ReactComponent as TableIcon } from '../../../assets/images/navigationIcons/table.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/images/navigationIcons/settings.svg';
import { RoutesName } from '../../../const/routesName';
import { TFormattedMessage } from '../../../types/types';
import messages from '../../../i18n/messages';
import { useAppReducer } from '../../../hooks';

export type TBoxes = {
  image: any;
  name: TFormattedMessage;
  route: string;
  action: () => void;
};

export const PersonNavigation = () => {
  const { changeApplicationType } = useAppReducer();

  const boxes: TBoxes[] = [
    {
      image: TransactionIcon,
      name: messages.navigationPageTransaction,
      route: RoutesName.ADD_TRANSACTIONS,
      action: () => changeApplicationType('SINGLE'),
    },
    {
      image: HistoryIcon,
      name: messages.navigationPageHistory,
      route: RoutesName.HISTORY,
      action: () => changeApplicationType('SINGLE'),
    },
    {
      image: TableIcon,
      name: messages.navigationTable,
      route: RoutesName.TABLE,
      action: () => changeApplicationType('SINGLE'),
    },
    {
      image: SettingsIcon,
      name: messages.navigationPageSettings,
      route: RoutesName.SETTINGS,
      action: () => changeApplicationType('SINGLE'),
    },
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
