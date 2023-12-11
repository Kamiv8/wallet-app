import { CardWrapper, Button } from '../../atoms';
import {
  InputField,
  SelectField,
  CheckboxField,
  ColorPickerField,
  TextAreaField,
} from '../../molecules';
import messages from '../../../i18n/messages';
import { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormWrapper, SavedInputsWrapper } from './AddTransactionForm.styles';
import useForm, { FieldType } from '../../../hooks/useForm';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { Category } from '../../../models/resources/category';
import { CurrencyApi, CategoryApi, TransactionApi } from '../../../api';
import { parseDataToSelect } from '../../../helpers/parseDataToSelect.helper';
import ApplicationContext from '../../../contexts/application.context';
import { getApplicationType } from '../../../helpers/checkIsGroup.helper';

export type TProps = {
  onClose: () => void;
};

export const AddTransactionForm = (props: TProps) => {
  const appContext = useContext(ApplicationContext);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [state, setState] = useState({
    currency: [] as CurrencyDto[],
    category: [] as Category[],
  });

  const initialValues = {
    title: '',
    price: '',
    currencyId: '',
    categoryId: '',
    date: new Date(),
    isDefault: false,
    textColor: '',
    backgroundColor: '',
    description: '',
    type: getApplicationType(appContext.state.type),
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  const handleIsSaved = (e: any) => {
    setIsSaved(e.target.checked);
    handleChange(e, 'isDefault', FieldType.Checkbox);
  };

  async function getCurrencyData() {
    const currencyData = await CurrencyApi.getCurrency();

    setState((prev) => ({
      ...prev,
      currency: currencyData.data?.response,
    }));
  }

  async function getUserCategoryData() {
    const userCategoryData = await CategoryApi.getUserCategory(
      getApplicationType(appContext.state.type),
    );

    setState((prev) => ({
      ...prev,
      category: userCategoryData.data?.response,
    }));
  }

  useEffect(() => {
    (async () => {
      await Promise.all([getCurrencyData(), getUserCategoryData()]);
    })();
  }, []);

  const onSubmit = async () => {
    await TransactionApi.addTransaction(values);
  };

  return (
    <CardWrapper gradientColor close={props.onClose}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addTransactionPageTitle }}
          variant={'dark'}
          name={'title'}
          onChange={(e) => handleChange(e, 'title')}
        />
        <InputField
          label={{ ...messages.addTransactionPagePrice }}
          variant={'dark'}
          name={'title'}
          type={'number'}
          onChange={(e) => handleChange(e, 'price', FieldType.Number)}
        />
        <SelectField
          selectItems={parseDataToSelect(state.currency)}
          label={{ ...messages.addTransactionPageCurrencies }}
          name={'currencyId'}
          onChange={handleChange}
        />
        <SelectField
          selectItems={parseDataToSelect(state.category)}
          label={{ ...messages.addTransactionPageCategory }}
          name={'categoryId'}
          onChange={handleChange}
        />
        <InputField
          label={{ ...messages.addTransactionPageDate }}
          variant={'dark'}
          name={'date'}
          type={'date'}
          onChange={(e) => handleChange(e, 'date', FieldType.Date)}
        />
        <TextAreaField
          label={{ ...messages.addTransactionPageDescription }}
          variant={'dark'}
          onChange={(e) => handleChange(e, 'description')}
          name={'description'}
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
              onChange={(e) => handleChange(e, 'textColor')}
            />
            <ColorPickerField
              label={{ ...messages.addTransactionPageBackgroundColor }}
              color={'darkBlue'}
              onChange={(e) => handleChange(e, 'backgroundColor')}
            />
          </SavedInputsWrapper>
        )}

        <Button color={'darkBlue'} type={'button'} onClick={onSubmit}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
