import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import InputField from '../../molecules/InputField/InputField';
import messages from '../../../i18n/messages';
import SelectField from '../../molecules/SelectField/SelectField';
import CheckboxField from '../../molecules/CheckboxField/CheckboxField';
import { useEffect, useState } from 'react';
import ColorPickerField from '../../molecules/ColorPickerField/ColorPickerField';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { FormWrapper, SavedInputsWrapper } from './AddTransactionForm.styles';
import useForm, { FieldType } from '../../../hooks/useForm';
import { api } from '../../../helpers/fetch.helper';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { Category } from '../../../models/resources/category';
import { CurrencyApi } from '../../../api/currency.api';
import { CategoryApi } from '../../../api/category.api';

export type TProps = {
  onClose: () => void;
};

const AddTransactionForm = (props: TProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [state, setState] = useState({
    currency: [] as CurrencyDto[],
    category: [] as Category[],
  });

  const initialValues = {
    title: '',
    price: '',
    currencies: '',
    category: '',
    date: new Date(),
    isDefault: false,
    textColor: '',
    backgroundColor: '',
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
      currency: currencyData.data,
    }));
  }

  async function getUserCategoryData() {
    const userCategoryData = await CategoryApi.getUserCategory();

    setState((prev) => ({
      ...prev,
      category: userCategoryData.data,
    }));
  }

  useEffect(() => {
    (async () => {
      await Promise.all([getCurrencyData(), getUserCategoryData()]);
    })();
  }, []);

  const parseDataToSelect = (data: Category[] | CurrencyDto[]) => {
    return data.map((x) => {
      return {
        key: x.id,
        description: x.name,
      };
    });
  };

  const onSubmit = async () => {
    const command = {
      ...values,
      type: 0,
    };

    await api.post('/transaction', command);
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
        />
        <SelectField
          selectItems={parseDataToSelect(state.category)}
          label={{ ...messages.addTransactionPageCategory }}
        />
        <InputField
          label={{ ...messages.addTransactionPageDate }}
          variant={'dark'}
          name={'date'}
          type={'date'}
          onChange={(e) => handleChange(e, 'date', FieldType.Date)}
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

        <Button color={'darkBlue'} type={'button'} onClick={() => onSubmit()}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};

export default AddTransactionForm;
