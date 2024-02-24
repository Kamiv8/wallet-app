import { CardWrapper, Button, Typography } from '../../atoms';
import {
  ButtonWrapper,
  EmptyArrayWrapper,
  ListWrapper,
  Wrapper,
} from './ChangeCategoryForm.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { InputField, List } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { CategoryApi } from '../../../api';
import { useEffect, useState } from 'react';
import { useFetch, useForm, useModalAction } from '../../../hooks';
import { createCategorySchema } from '../../../validators/category/createCategory.validator';
import {
  TCreateUserCategoryForm,
  TGetUserCategoriesResponse,
} from '../../../models/apiTypes/category';

export const ChangeCategoryForm = () => {
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
    onSubmit(CategoryApi.createUserCategory);
    setRefresher(true);
    resetForm();
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
      <Wrapper>
        <InputField
          label={{ ...messages.changeCategoryFormAddNewCategory }}
          variant={'dark'}
          name={'newCategory'}
          error={getValidationMessage('name')}
          onChange={(e) => handleChange(e, 'name')}
        />
        <ButtonWrapper>
          <Button color={'darkBlue'} onClick={handleSubmit}>
            <FormattedMessage {...messages.buttonAdd} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
      <ListWrapper>
        {state?.length ? (
          <List
            headerText={messages.changeCategoryFormYourCategory}
            listItem={state}
            hasButton
            buttonAction={onClickDelete}
            color={'darkBlue'}
            buttonText={messages.buttonDelete}
          />
        ) : (
          <EmptyArrayWrapper>
            <Typography size={'l'}>You don't have your own category</Typography>
          </EmptyArrayWrapper>
        )}
      </ListWrapper>
    </CardWrapper>
  );
};
