import { useCallback, useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import { GroupRoutesName, RoutesName } from '../../../const';
import { TFormattedMessage } from '../../../types/types';
import { LocalstorageHelper } from '../../../helpers';

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

  const toggleNavigation = useCallback(
    (open: boolean) => {
      setIsOpenNav(open);
    },
    [isOpenNav],
  );

  const logout = useCallback(() => {
    LocalstorageHelper.clear();
    navigate(RoutesName.LOGIN);
  }, []);

  return {
    logout,
    toggleNavigation,
    rootURL,
    rootGroupURL,
    isOpenNav,
  };
};
