import {
  Navigate,
  Outlet,
  Route,
  Routes as RoutesWrapper,
} from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import HomePage from './components/pages/HomePage/HomePage';
import VerificationSuccessfulPage from './components/pages/VerificationSuccessfulPage/VerificationSuccessfulPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { GroupRoutesName, RoutesName } from './const/routesName';
import ResetPasswordPage from './components/pages/ResetPasswordPage/ResetPasswordPage';
import AddTransactionPage from './components/pages/AddTransactionPage/AddTransactionPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';
import FindGroupPage from './components/pages/FindGroupPage/FindGroupPage';
import HistoryDetailsPage from './components/pages/HistoryDetailsPage/HistoryDetailsPage';
import jwtDecode from 'jwt-decode';
import SettingsPage from './components/pages/SettingsPage/SettingsPage';
import GroupPage from './components/pages/GroupPage/GroupPage';
import ChangeCurrencyPage from './components/pages/ChangeCurrencyPage/ChangeCurrencyPage';
import ChangeLanguagePage from './components/pages/ChangeLanguagePage/ChangeLanguagePage';
import ChangeUserIconPage from './components/pages/ChangeUserIconPage/ChangeUserIconPage';
import ChangeUsernamePage from './components/pages/ChangeUsernamePage/ChangeUsernamePage';
import ChangeUserPasswordPage from './components/pages/ChangeUserPasswordPage/ChangeUserPasswordPage';
import ChangeCategoryPage from './components/pages/ChangeCategoryPage/ChangeCategoryPage';
import TablePage from './components/pages/TablePage/TablePage';
import NoteDetailsPage from './components/pages/NoteDetailsPage/NoteDetailsPage';
import AddNotePage from './components/pages/AddNotePage/AddNotePage';
import GroupHomePage from './components/pages/groupPages/GroupHomePage/GroupHomePage';
import NotificationPanelPage from './components/pages/groupPages/NotificationPanel/NotificationPanelPage';
import CreateGroupPage from './components/pages/CreateGroupPage/CreateGroupPage';
import GroupSettingsPage from './components/pages/groupPages/GroupSettingsPage/GroupSettingsPage';
import { ManageUsersPage } from './components/pages/groupPages/ManageUsersPage/ManageUsersPage';

const GuardedRoute = () => {
  const token = localStorage.getItem('token');
  const now = new Date();
  if (!token) {
    return <Navigate to={RoutesName.LOGIN} />;
  }
  const decodedToken = jwtDecode(token) as any;

  if (decodedToken.exp * 1000 < now.getTime()) {
    return <Navigate to={RoutesName.LOGIN} />;
  }

  return <Outlet />;
};

const GroupRoute = () => {
  const userGroup = localStorage.getItem('groupId');
  if (!userGroup) return <Navigate to={RoutesName.CREATE_FIND_GROUP} />;

  return <Outlet />;
};

export const Routes = () => (
  <RoutesWrapper>
    <Route path={RoutesName.REGISTER} element={<RegisterPage />} />
    <Route path={RoutesName.LOGIN} element={<LoginPage />} />
    <Route
      path={RoutesName.VERIFY + '/:id'}
      element={<VerificationSuccessfulPage />}
    />
    <Route path={RoutesName.RESET_PASSWORD} element={<ResetPasswordPage />} />
    <Route element={<GuardedRoute />}>
      <Route path={RoutesName.ROOT} element={<HomePage />} />
      <Route
        path={RoutesName.ADD_TRANSACTIONS}
        element={<AddTransactionPage />}
      />
      <Route
        path={RoutesName.HISTORY + '/:id'}
        element={<HistoryDetailsPage />}
      />
      <Route path={RoutesName.HISTORY} element={<HistoryPage />} />
      <Route path={RoutesName.CREATE_FIND_GROUP} element={<GroupPage />} />
      <Route path={RoutesName.FIND_GROUP} element={<FindGroupPage />} />
      <Route path={RoutesName.CREATE_GROUP} element={<CreateGroupPage />} />
      <Route path={RoutesName.SETTINGS} element={<SettingsPage />} />
      <Route
        path={RoutesName.CHANGE_CURRENCIES}
        element={<ChangeCurrencyPage />}
      />
      <Route
        path={RoutesName.CHANGE_LANGUAGE}
        element={<ChangeLanguagePage />}
      />
      <Route path={RoutesName.CHANGE_ICON} element={<ChangeUserIconPage />} />
      <Route
        path={RoutesName.CHANGE_USERNAME}
        element={<ChangeUsernamePage />}
      />
      <Route
        path={RoutesName.CHANGE_PASSWORD}
        element={<ChangeUserPasswordPage />}
      />
      <Route
        path={RoutesName.CHANGE_CATEGORY}
        element={<ChangeCategoryPage />}
      />
      <Route path={RoutesName.TABLE} element={<TablePage />} />
      <Route path={RoutesName.TABLE + `/:id`} element={<NoteDetailsPage />} />
      <Route path={RoutesName.ADD_NOTE} element={<AddNotePage />} />

      <Route element={<GroupRoute />}>
        <Route path={GroupRoutesName.ROOT} element={<GroupHomePage />} />
        <Route
          path={GroupRoutesName.NOTIFICATIONS}
          element={<NotificationPanelPage />}
        />
        <Route
          path={GroupRoutesName.SETTINGS}
          element={<GroupSettingsPage />}
        />
        <Route
          path={GroupRoutesName.MANAGE_USERS}
          element={<ManageUsersPage />}
        />
      </Route>
    </Route>
  </RoutesWrapper>
);
