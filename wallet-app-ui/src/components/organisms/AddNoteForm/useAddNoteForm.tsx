import { useNavigate } from 'react-router-dom';
import { colorPicker } from '../../../const/colorPicker';
import { useForm } from '../../../hooks';
import { AddUserNoteForm } from '../../../models/apiTypes/note';
import { createUserSchema } from '../../../validators/Note/CreateNote.validator';
import { NoteApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';
import { CustomString } from '../../../overrides/string.override';

export const useAddNoteForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: CustomString.Empty,
    text: CustomString.Empty,
    textColor: colorPicker.textColor,
    backgroundColor: colorPicker.backgroundColor,
  };

  const { values, handleChange, onSubmit, getValidationMessage } =
    useForm<AddUserNoteForm>(initialValues, createUserSchema);

  const handleSubmit = async () => {
    const response = await onSubmit(NoteApi.createUserNote);
    if (response.status === ApiStatus.SUCCESS) navigate(RoutesName.TABLE);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    getValidationMessage,
    navigate: () => navigate(RoutesName.TABLE),
  };
};
