import { Navigate, Outlet } from 'react-router-dom';
import { RoutesName } from './const/routesName';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { TokenApi } from './api';

const GuardedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const now = new Date();
      const decodedToken = jwtDecode(token) as any;

      if (decodedToken.exp * 1000 < now.getTime()) {
        try {
          const newToken = await TokenApi.getAccessToken();
          localStorage.setItem('token', newToken.data?.jwtToken ?? '');
          localStorage.setItem(
            'refreshToken',
            newToken.data?.refreshToken ?? '',
          );
        } catch (error) {
          setIsAuthenticated(false);
          return;
        }
      }

      setIsAuthenticated(true);
    })();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={RoutesName.LOGIN} />;
};
export default GuardedRoute;
