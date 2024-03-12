import { RouteObject, useRoutes } from 'react-router-dom';
import { RoutesName } from '../const';
import { HomePage, LoginPage, RegisterPage } from '../components/pages';
import GuardedRoute from '../GuardedRoute';

type PathNamesValue = {
  path: string;
  children?: { [p: string]: PathNamesValue };
};

type PathNames = {
  [route: string]: PathNamesValue;
};

const pathNames: PathNames = {
  ROOT: {
    path: '/',
  },
  LOGIN: {
    path: '/login',
  },
  REGISTER: {
    path: '/register',
  },
  RESET_PASSWORD: {
    path: '/resetPassword',
  },
  VERIFY: {
    path: '/verify',
  },
  ADD_TRANSACTIONS: {
    path: '/AddTransactions',
  },
  HISTORY: {
    path: '/history',
  },
  TABLE: {
    path: '/table',
    children: {
      ADD_NOTE: {
        path: '/addNote',
      },
    },
  },
  SETTINGS: {
    path: '/settings',
    children: {
      CHANGE_CATEGORY: {
        path: '/changeCategory',
      },
      CHANGE_CURRENCIES: {
        path: '/changeCurrencies',
      },
      CHANGE_ICON: {
        path: '/changeIcon',
      },
      CHANGE_PASSWORD: {
        path: '/changePassword',
      },
      CHANGE_USERNAME: {
        path: '/changeUsername',
      },
      CHANGE_LANGUAGE: {
        path: '/changeLanguage',
      },
    },
  },
  REPORT: {
    path: '/report',
  },
  NAVIGATION: {
    path: '/navigation',
  },
  CREATE_FIND_GROUP: {
    path: '/createFindGroup',
  },
  CREATE_GROUP: {
    path: '/createGroup',
  },
  FIND_GROUP: {
    path: '/findGroup',
  },
};

const routesArray: Array<RouteObject> = [
  {
    path: pathNames.LOGIN.path,
    element: <LoginPage />,
  },
  {
    path: pathNames.REGISTER.path,
    element: <RegisterPage />,
  },
  {
    element: <GuardedRoute />,
    children: [
      {
        path: pathNames.ROOT.path,
        element: <HomePage />,
      },
    ],
  },
];

export const Routes = () => {
  return useRoutes(routesArray);
};
