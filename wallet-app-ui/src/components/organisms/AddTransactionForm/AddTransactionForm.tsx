import { CardWrapper, Button } from '../../atoms';
import {
  InputField,
  SelectField,
  CheckboxField,
  ColorPickerField,
  TextAreaField,
} from '../../molecules';
import messages from '../../../i18n/messages';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormWrapper, SavedInputsWrapper } from './AddTransactionForm.styles';
import { useForm, FieldType, useFetch } from '../../../hooks';
import { CategoryApi, CurrencyApi, TransactionApi } from '../../../api';
import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency';
import { TGetUserCategoriesResponse } from '../../../models/apiTypes/category';
import { TAddUserTransactionForm } from '../../../models/apiTypes/transaction';
import { parseDataToSelect, parseToCurrencySelect } from '../../../helpers';
import { addUserTransactionSchema } from '../../../validators/transaction/addUserTransaction.validator';
import { ApiStatus } from '../../../models/apiResult';
import { transactionDefaultColor } from '../../../const/colorPicker';

export type TProps = {
  onClose: () => void;
};

export const AddTransactionForm = ({ onClose }: TProps) => {
  const { callToApi } = useFetch();

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [state, setState] = useState({
    currency: [] as Array<TGetCurrenciesResponse>,
    category: [] as Array<TGetUserCategoriesResponse>,
  });

  const initialValues = {
    title: '',
    price: 0,
    currencyId: '',
    categoryId: '',
    date: new Date(),
    isDefault: false,
    textColor: undefined,
    backgroundColor: undefined,
    description: undefined,
  };

  const {
    values,
    handleChange,
    getValidationMessage,
    onSubmit,
    updateInitValues,
  } = useForm<TAddUserTransactionForm>(initialValues, addUserTransactionSchema);

  const handleIsSaved = (e: any) => {
    setIsSaved(e.target.checked);
    handleChange(e, 'isDefault', FieldType.Checkbox);

    if (!e.target.checked) {
      setState((prev) => ({
        ...prev,
        backgroundColor: undefined,
        textColor: undefined,
      }));
    }
  };
  async function getCurrencyData() {
    const currencyData = await callToApi(CurrencyApi.getCurrencies());
    setState((prev) => ({
      ...prev,
      currency: currencyData.data ?? [],
    }));
  }

  async function getUserCategoryData() {
    const data = await callToApi(CategoryApi.getUserCategories());
    setState((prev) => ({
      ...prev,
      category: data.data ?? [],
    }));
  }

  useEffect(() => {
    (async () => {
      await Promise.all([getCurrencyData(), getUserCategoryData()]);
    })();
  }, []);

  useEffect(() => {
    if (values.isDefault) {
      updateInitValues({
        ...values,
        backgroundColor: transactionDefaultColor.backgroundColor,
        textColor: transactionDefaultColor.textColor,
      });
    } else {
      updateInitValues({
        ...values,
        backgroundColor: undefined,
        textColor: undefined,
      });
    }
  }, [values.isDefault]);

  const handleSubmit = async () => {
    const response = await onSubmit(TransactionApi.addTransaction);
    if (response.status === ApiStatus.SUCCESS) onClose();
  };

  return (
    <CardWrapper gradientColor close={onClose}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addTransactionPageTitle }}
          variant={'dark'}
          name={'title'}
          value={values.title}
          error={getValidationMessage('title')}
          onChange={(e) => handleChange(e, 'title')}
        />
        <InputField
          label={{ ...messages.addTransactionPagePrice }}
          variant={'dark'}
          name={'title'}
          value={values.price}
          error={getValidationMessage('price')}
          type={'number'}
          onChange={(e) => handleChange(e, 'price', FieldType.Number)}
        />
        <SelectField
          selectItems={parseToCurrencySelect(state.currency)}
          label={{ ...messages.addTransactionPageCurrencies }}
          name={'currencyId'}
          error={getValidationMessage('currencyId')}
          onChange={handleChange}
        />
        <SelectField
          selectItems={parseDataToSelect(state.category)}
          label={{ ...messages.addTransactionPageCategory }}
          name={'categoryId'}
          error={getValidationMessage('categoryId')}
          onChange={handleChange}
        />
        <InputField
          label={{ ...messages.addTransactionPageDate }}
          variant={'dark'}
          name={'date'}
          type={'date'}
          error={getValidationMessage('date')}
          onChange={(e) => handleChange(e, 'date', FieldType.Date)}
        />
        <TextAreaField
          label={{ ...messages.addTransactionPageDescription }}
          variant={'dark'}
          error={getValidationMessage('description')}
          onChange={(e) => handleChange(e, 'description')}
          name={'description'}
          value={values.description}
        />
        <CheckboxField
          label={{ ...messages.addTransactionPageSavedTransaction }}
          color={'darkBlue'}
          name={'isSaved'}
          onChange={(e) => handleIsSaved(e)}
        />
        {isSaved && (
          <SavedInputsWrapper>
            <ColorPickerField
              label={{ ...messages.addTransactionPageTextColor }}
              color={'darkBlue'}
              defaultValue={values.textColor}
              onChange={(e) => handleChange(e, 'textColor')}
            />
            <ColorPickerField
              label={{ ...messages.addTransactionPageBackgroundColor }}
              color={'darkBlue'}
              defaultValue={values.backgroundColor}
              onChange={(e) => handleChange(e, 'backgroundColor')}
            />
          </SavedInputsWrapper>
        )}
        <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
