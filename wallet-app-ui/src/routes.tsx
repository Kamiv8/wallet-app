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
import { useAppSelector } from './redux/hooks';
import { RoutesName } from './const/routesName';

const GuardedRoute = () => {
  const { isUserLoggedIn } = useAppSelector((store) => store.auth.data);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={RoutesName.LOGIN} />;
};

export const Routes = () => (
  <RoutesWrapper>
    <Route path={'/register'} element={<RegisterPage />} />
    <Route path={'/login'} element={<LoginPage />} />
    <Route element={<GuardedRoute />}>
      <Route path={RoutesName.ROOT} element={<HomePage />} />
    </Route>
    <Route path={'/verify/:id'} element={<VerificationSuccessfulPage />} />
  </RoutesWrapper>
);
