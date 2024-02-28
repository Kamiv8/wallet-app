import { useCallback, useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import { GroupRoutesName, RoutesName } from '../../../const/routesName';
import TransactionIcon from '../../../assets/images/navigationIcons/transaction.svg';
import messages from '../../../i18n/messages';
import HistoryIcon from '../../../assets/images/navigationIcons/history.svg';
import TableIcon from '../../../assets/images/navigationIcons/table.svg';
import { TFormattedMessage } from '../../../types/types';

export type TNavigationItems = {
  route: string;
  icon: string;
  text: TFormattedMessage;
};
export const useFooter = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navigate = useNavigate();

  const rootURL = useHref(RoutesName.ROOT);
  const rootGroupURL = useHref(GroupRoutesName.ROOT);
  const transactionURL = useHref(RoutesName.ADD_TRANSACTIONS);
  const historyURL = useHref(RoutesName.HISTORY);
  const tableURL = useHref(RoutesName.TABLE);

  const navigationItems: TNavigationItems[] = [
    {
      icon: TransactionIcon,
      route: transactionURL,
      text: messages.navigationTransaction,
    },
    {
      icon: HistoryIcon,
      route: historyURL,
      text: messages.navigationHistory,
    },
    {
      icon: TableIcon,
      route: tableURL,
      text: messages.navigationTable,
    },
  ];

  const toggleNavigation = useCallback(
    (open: boolean) => {
      setIsOpenNav(open);
    },
    [isOpenNav],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('groupId');
    localStorage.removeItem('userRole');
    navigate(RoutesName.LOGIN);
  }, []);

  return {
    logout,
    toggleNavigation,
    navigationItems,
    rootURL,
    rootGroupURL,
    isOpenNav,
  };
};
