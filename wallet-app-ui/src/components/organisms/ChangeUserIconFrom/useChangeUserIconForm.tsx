import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { UserApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';

export const useChangeUserIconForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    iconId: 1 as 1 | 2 | 3 | 4,
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleSubmit = async () => {
    const command = {
      iconId: values.iconId,
    };
    await UserApi.changeIcon(command);
    navigate(RoutesName.SETTINGS);
  };

  return {
    onClose: () => navigate(RoutesName.SETTINGS),
    handleChange,
    handleSubmit,
    values,
  };
};
