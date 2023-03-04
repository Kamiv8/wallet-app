type TRoutes = {
  ROOT: string;
  REGISTER: string;
  LOGIN: string;
  RESET_PASSWORD: string;
  ADD_TRANSACTIONS: string;
  VERIFY: string;
  HISTORY: string;
  TABLE: string;
  ADD_NOTE: string;
  SETTINGS: string;
  REPORT: string;
  NAVIGATION: string;
  CREATE_FIND_GROUP: string;
  CREATE_GROUP: string;
  FIND_GROUP: string;
  CHANGE_CURRENCIES: string;
  CHANGE_CATEGORY: string;
  CHANGE_ICON: string;
  CHANGE_PASSWORD: string;
  CHANGE_USERNAME: string;
  CHANGE_LANGUAGE: string;
};

export const RoutesName: TRoutes = {
  ROOT: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  RESET_PASSWORD: '/resetPassword',
  VERIFY: '/verify',
  ADD_TRANSACTIONS: '/AddTransactions',
  HISTORY: '/history',
  TABLE: '/table',
  ADD_NOTE: '/table/addNote',
  SETTINGS: '/settings',
  REPORT: '/report',
  NAVIGATION: '/navigation',
  CREATE_FIND_GROUP: '/createFindGroup',
  CREATE_GROUP: '/createGroup',
  FIND_GROUP: '/findGroup',
  CHANGE_CURRENCIES: '/settings/changeCurrencies',
  CHANGE_CATEGORY: '/settings/changeCategory',
  CHANGE_ICON: '/settings/changeIcon',
  CHANGE_PASSWORD: '/settings/changePassword',
  CHANGE_USERNAME: '/settings/changeUsername',
  CHANGE_LANGUAGE: '/settings/changeLanguage',
};
