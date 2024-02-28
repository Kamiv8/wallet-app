import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { TAuthenticateForm } from '../../../models/apiTypes/account';
import { authenticateSchema } from '../../../validators/account/authenticate.validator';
import { AuthApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { LocalstorageHelper } from '../../../helpers';
import { LocalstorageEnum } from '../../../types/enums';
import { RoutesName } from '../../../const/routesName';
import { CustomString } from '../../../overrides/string.override';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: CustomString.Empty,
    password: CustomString.Empty,
  };
  const { handleChange, onSubmit, getValidationMessage, values } =
    useForm<TAuthenticateForm>(initialValues, authenticateSchema);

  const handleSubmit = async () => {
    const authenticate = await onSubmit(AuthApi.authenticate);
    if (authenticate.status !== ApiStatus.SUCCESS) return;

    LocalstorageHelper.setItem(
      LocalstorageEnum.TOKEN,
      authenticate.data?.token ?? CustomString.Empty,
    );
    LocalstorageHelper.setItem(
      LocalstorageEnum.REFRESH_TOKEN,
      authenticate.data?.refreshToken ?? CustomString.Empty,
    );
    navigate(RoutesName.ROOT);
  };

  return {
    values,
    handleSubmit,
    handleChange,
    getValidationMessage,
  };
};
