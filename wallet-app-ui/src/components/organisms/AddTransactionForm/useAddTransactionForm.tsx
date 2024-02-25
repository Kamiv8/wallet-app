import { FieldType, useFetch, useForm } from '../../../hooks';
import { useEffect, useState } from 'react';
import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency';
import { TGetUserCategoriesResponse } from '../../../models/apiTypes/category';
import { TAddUserTransactionForm } from '../../../models/apiTypes/transaction';
import { addUserTransactionSchema } from '../../../validators/transaction/addUserTransaction.validator';
import { CategoryApi, CurrencyApi, TransactionApi } from '../../../api';
import { transactionDefaultColor } from '../../../const/colorPicker';
import { ApiStatus } from '../../../models/apiResult';

export type TProps = {
  onClose: () => void;
};

export const useAddTransactionForm = ({ onClose }: TProps) => {
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
    const currencyData = await callToApi(CurrencyApi.addCurrencies());
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
  return {
    handleSubmit,
    values,
    getValidationMessage,
    handleChange,
    isSaved,
    state,
    handleIsSaved,
  };
};
