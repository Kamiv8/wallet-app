import { LocalstorageHelper } from '../../../helpers';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const';

export const useAside = () => {
  const navigate = useNavigate();
  const logout = () => {
    LocalstorageHelper.clear();
    navigate(RoutesName.LOGIN);
  };

  return {
    logout,
  };
};
