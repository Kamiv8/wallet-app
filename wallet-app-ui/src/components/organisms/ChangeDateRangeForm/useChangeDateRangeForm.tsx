import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const';
import { DateRangeOption } from '../../../types/enums';
import { useForm } from '../../../hooks';
import { changeDateRangeSchema } from '../../../validators/settings/changeDateRange.validator';
import { ChangeDateRangeForm } from '../../../models/apiTypes/settings';
import { SettingsApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';

export const useChangeDateRangeForm = () => {
  const navigate = useNavigate();
  const initialValues: ChangeDateRangeForm = {
    option: DateRangeOption.Empty,
    customDay: undefined,
    customDate: undefined,
  };
  const { values, handleChange, onSubmit, getValidationMessage } =
    useForm<ChangeDateRangeForm>(initialValues, changeDateRangeSchema);

  const handleSubmit = async () => {
    const res = await onSubmit(SettingsApi.changeDateRange);
    if (res.status !== ApiStatus.SUCCESS) return;
    navigate(RoutesName.SETTINGS);
  };

  return {
    onClose: () => navigate(RoutesName.SETTINGS),
    values,
    handleChange,
    handleSubmit,
    getValidationMessage,
  };
};
