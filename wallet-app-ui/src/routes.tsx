import {
  Navigate,
  Outlet,
  Route,
  Routes as RoutesWrapper,
} from 'react-router-dom';
import { GroupRoutesName, RoutesName } from './const/routesName';
import GuardedRoute from './GuardedRoute';
import {
  AddNotePage,
  AddTransactionPage,
  ChangeCategoryPage,
  ChangeCurrencyPage,
  ChangeForgotPasswordPage,
  ChangeLanguagePage,
  ChangeUserIconPage,
  ChangeUsernamePage,
  ChangeUserPasswordPage,
  CreateGroupPage,
  FindGroupPage,
  GroupPage,
  HistoryDetailsPage,
  HistoryPage,
  HomePage,
  LoginPage,
  NoteDetailsPage,
  RegisterPage,
  ResetPasswordPage,
  SettingsPage,
  TablePage,
  VerificationSuccessfulPage,
} from './components/pages';
import {
  GroupHomePage,
  GroupSettingsPage,
  ManageUsersPage,
  NotificationPanelPage,
} from './components/pages/groupPages';

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
      path={RoutesName.VERIFY + '/:email' + '/:id'}
      element={<VerificationSuccessfulPage />}
    />
    <Route
      path={RoutesName.RESET_PASSWORD + '/:email' + '/:token'}
      element={<ChangeForgotPasswordPage />}
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
