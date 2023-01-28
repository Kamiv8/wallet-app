import {
  Navigate,
  // Navigate,
  Outlet,
  Route,
  Routes as RoutesWrapper,
} from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import HomePage from './components/pages/HomePage/HomePage';
import VerificationSuccessfulPage from './components/pages/VerificationSuccessfulPage/VerificationSuccessfulPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { useAppSelector } from './redux/hooks';
import { RoutesName } from './const/routesName';
import ResetPasswordPage from './components/pages/ResetPasswordPage/ResetPasswordPage';
import AddTransactionPage from './components/pages/AddTransactionPage/AddTransactionPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';
import FindGroupPage from './components/pages/FindGroupPage/FindGroupPage';
import HistoryDetailsPage from './components/pages/HistoryDetailsPage/HistoryDetailsPage';

const GuardedRoute = () => {
  const { isUserLoggedIn } = useAppSelector((store) => store.auth.data);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={RoutesName.LOGIN} />;
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
      <Route path={RoutesName.HISTORY + "/:id"} element={<HistoryDetailsPage />} />
      <Route path={RoutesName.HISTORY} element={<HistoryPage />} />
      <Route path={RoutesName.FIND_GROUP} element={<FindGroupPage />} />
    </Route>
  </RoutesWrapper>
);
