import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';

export const Routes = () => (
  <RoutesWrapper>
    <Route path={'/register'} element={<RegisterPage />} />
  </RoutesWrapper>
);
