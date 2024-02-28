import { Navigate, Outlet } from 'react-router-dom';
import { RoutesName } from './const/routesName';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { TokenApi } from './api';
import { LocalstorageHelper } from './helpers/localstorage.helper';
import { LocalstorageEnum } from './types/enums/localstorage.enum';
import { CustomString } from './overrides/string.override';

const GuardedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const token = LocalstorageHelper.getItem(LocalstorageEnum.TOKEN);

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const now = new Date();
      const decodedToken = jwtDecode(token) as any;

      if (decodedToken.exp * 1000 < now.getTime()) {
        try {
          const newToken = await TokenApi.getAccessToken();
          LocalstorageHelper.setItem(
            LocalstorageEnum.TOKEN,
            newToken.data?.jwtToken ?? CustomString.Empty,
          );
          LocalstorageHelper.setItem(
            LocalstorageEnum.REFRESH_TOKEN,
            newToken.data?.refreshToken ?? CustomString.Empty,
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
