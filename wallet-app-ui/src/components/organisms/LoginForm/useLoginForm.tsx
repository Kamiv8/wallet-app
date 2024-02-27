import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TAuthenticateForm } from '../../../models/apiTypes/account';
import { authenticateSchema } from '../../../validators/account/authenticate.validator';
import { AuthApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { LocalstorageHelper } from '../../../helpers';
import { LocalstorageEnum } from '../../../types/enums';
import { RoutesName } from '../../../const/routesName';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
  };
  const { handleChange, onSubmit, getValidationMessage, values } =
    useForm<TAuthenticateForm>(initialValues, authenticateSchema);

  const handleSubmit = async () => {
    const authenticate = await onSubmit(AuthApi.authenticate);

    if (authenticate?.status === ApiStatus.SUCCESS) {
      LocalstorageHelper.setItem(
        LocalstorageEnum.TOKEN,
        authenticate.data?.token ?? '',
      );
      LocalstorageHelper.setItem(
        LocalstorageEnum.REFRESH_TOKEN,
        authenticate.data?.refreshToken ?? '',
      );
      navigate(RoutesName.ROOT);
    }
  };

  return {
    values,
    handleSubmit,
    handleChange,
    getValidationMessage,
  };
};
