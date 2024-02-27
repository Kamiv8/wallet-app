import { useNavigate } from 'react-router-dom';
import { useFetch, useForm, useModalAction } from '../../../hooks';
import { useEffect, useState } from 'react';
import {
  TCreateUserCategoryForm,
  TGetUserCategoriesResponse,
} from '../../../models/apiTypes/category';
import { CategoryApi } from '../../../api';
import { createCategorySchema } from '../../../validators/category/createCategory.validator';
import messages from '../../../i18n/messages';
import { ApiStatus } from '../../../models/apiResult';
import { RoutesName } from '../../../const/routesName';

export const useChangeCategoryForm = () => {
  const navigate = useNavigate();
  const { callToApi } = useFetch();
  const { openConfirmActionModal, closeConfirmActionModal } = useModalAction();

  const [state, setState] = useState<Array<TGetUserCategoriesResponse>>([]);
  const [refresher, setRefresher] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await callToApi(CategoryApi.getUserCategories());
      setState(data.data ?? []);
      setRefresher(false);
    })();
  }, [refresher]);

  const initialValues = {
    name: '',
  };

  const { handleChange, resetForm, onSubmit, getValidationMessage } =
    useForm<TCreateUserCategoryForm>(initialValues, createCategorySchema);

  const handleDelete = async (id: string) => {
    await callToApi(CategoryApi.deleteUserCategory(id));
    setRefresher(true);
    closeConfirmActionModal();
  };

  const onClickDelete = (id: string) => {
    openConfirmActionModal(
      messages.changeCategoryFormDeleteConfirmModal,
      () => handleDelete(id),
      () => closeConfirmActionModal(),
    );
  };
  const handleSubmit = async () => {
    const response = await onSubmit(CategoryApi.createUserCategory);
    if (response.status !== ApiStatus.SUCCESS) return;
    setRefresher(true);
    resetForm();
  };

  return {
    handleSubmit,
    onClickDelete,
    onClose: () => navigate(RoutesName.SETTINGS),
    state,
    handleChange,
    getValidationMessage,
  };
};
