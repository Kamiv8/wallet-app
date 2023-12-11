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
import { useContext, useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import ApplicationContext from '../../../contexts/application.context';
import { getApplicationType } from '../../../helpers/checkIsGroup.helper';

export const ChangeCategoryForm = () => {
  const appContext = useContext(ApplicationContext);
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [refresher, setRefresher] = useState(false);
  async function getCategories() {
    return CategoryApi.getUserCategory(
      getApplicationType(appContext.state.type),
    );
  }

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setState(data.data?.response);
      setRefresher(false);
    })();
  }, [refresher]);

  const initialValues = {
    name: '',
  };

  const { values, handleChange, resetForm } =
    useForm<typeof initialValues>(initialValues);

  const handleDelete = async (id: string) => {
    await CategoryApi.deleteCategory(id);
    setRefresher(true);
  };
  const handleSubmit = async () => {
    await CategoryApi.addNewCategory(values);
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
          onChange={(e) => handleChange(e, 'name')}
        />
        <ButtonWrapper>
          <Button color={'darkBlue'} onClick={handleSubmit}>
            <FormattedMessage {...messages.buttonAdd} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
      <ListWrapper>
        {state.length ? (
          <List
            headerText={messages.changeCategoryFormYourCategory}
            listItem={state}
            hasButton
            buttonAction={handleDelete}
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
