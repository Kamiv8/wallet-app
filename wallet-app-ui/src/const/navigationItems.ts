import messages from '../i18n/messages';
import { RoutesName } from './routesName';
import { ReactComponent as TransactionIcon } from '../assets/images/navigationIcons/transaction.svg';
import { ReactComponent as HistoryIcon } from '../assets/images/navigationIcons/history.svg';
import { ReactComponent as TableIcon } from '../assets/images/navigationIcons/table.svg';
import { ReactComponent as SettingsIcon } from '../assets/images/navigationIcons/settings.svg';
import { ReactComponent as HomeIcon } from '../assets/images/home.svg';
import TransactionIconURL from '../assets/images/navigationIcons/transaction.svg';
import HistoryIconURL from '../assets/images/navigationIcons/history.svg';
import TableIconURL from '../assets/images/navigationIcons/table.svg';
import { NavigationItemsEnum } from '../types/enums';
import { FunctionComponent, SVGProps } from 'react';
import { TFormattedMessage } from '../types/types';

export type NavigationItems = {
  id: NavigationItemsEnum;
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
  imageURL?: string;
  name: TFormattedMessage;
  route: string;
};

export const navigationItems: Array<NavigationItems> = [
  {
    id: NavigationItemsEnum.HOME,
    image: HomeIcon,
    name: messages.navigationPageHome,
    route: RoutesName.ROOT,
  },
  {
    id: NavigationItemsEnum.TRANSACTION,
    image: TransactionIcon,
    imageURL: TransactionIconURL,
    name: messages.navigationPageTransaction,
    route: RoutesName.ADD_TRANSACTIONS,
  },
  {
    id: NavigationItemsEnum.HISTORY,
    image: HistoryIcon,
    imageURL: HistoryIconURL,
    name: messages.navigationPageHistory,
    route: RoutesName.HISTORY,
  },
  {
    id: NavigationItemsEnum.TABLE,
    image: TableIcon,
    imageURL: TableIconURL,
    name: messages.navigationTable,
    route: RoutesName.TABLE,
  },
  {
    id: NavigationItemsEnum.SETTINGS,
    image: SettingsIcon,
    name: messages.navigationPageSettings,
    route: RoutesName.SETTINGS,
  },
];
