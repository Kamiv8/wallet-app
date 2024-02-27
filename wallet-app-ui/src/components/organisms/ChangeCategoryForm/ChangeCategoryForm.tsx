import { CardWrapper, Button, Typography } from '../../atoms';
import {
  ButtonWrapper,
  EmptyArrayWrapper,
  ListWrapper,
  Wrapper,
} from './ChangeCategoryForm.styles';
import { InputField, List } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useChangeCategoryForm } from './useChangeCategoryForm';

export const ChangeCategoryForm = () => {
  const {
    state,
    handleChange,
    getValidationMessage,
    handleSubmit,
    onClickDelete,
    onClose,
  } = useChangeCategoryForm();
  return (
    <CardWrapper gradientColor close={onClose}>
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
            <Typography size={'l'}>
              <FormattedMessage {...messages.changeCategoryFormEmptyArray} />
            </Typography>
          </EmptyArrayWrapper>
        )}
      </ListWrapper>
    </CardWrapper>
  );
};
