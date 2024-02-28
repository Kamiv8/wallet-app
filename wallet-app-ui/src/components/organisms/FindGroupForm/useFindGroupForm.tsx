import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { GroupApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';
import { CustomString } from '../../../overrides/string.override';

type TProps = {
  foundedGroup: (data: any) => void;
};
export const useFindGroupForm = ({ foundedGroup }: TProps) => {
  const navigate = useNavigate();

  const initialValues = {
    name: CustomString.Empty,
  };

  const { handleChange, values } = useForm<typeof initialValues>(initialValues);

  const onSubmit = async () => {
    const data = await GroupApi.findGroup(values);
    if (data.status === ApiStatus.SUCCESS) {
      foundedGroup(data.data);
    }
  };

  return {
    onSubmit,
    handleChange,
    onClose: () => navigate(RoutesName.CREATE_FIND_GROUP),
  };
};
