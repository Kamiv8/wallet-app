import { FieldType, useFetch, useForm } from '../../../hooks';
import { useEffect, useState } from 'react';
import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency';
import { TGetUserCategoriesResponse } from '../../../models/apiTypes/category';
import { TAddUserTransactionForm } from '../../../models/apiTypes/transaction';
import { addUserTransactionSchema } from '../../../validators/transaction/addUserTransaction.validator';
import { CategoryApi, CurrencyApi, TransactionApi } from '../../../api';
import { transactionDefaultColor } from '../../../const';
import { ApiStatus } from '../../../models/apiResult';
import { CustomString } from '../../../overrides/string.override';

export type TProps = {
  onClose: () => void;
};

export const useAddTransactionForm = ({ onClose }: TProps) => {
  const { callToApis } = useFetch();

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [state, setState] = useState({
    currency: [] as Array<TGetCurrenciesResponse>,
    category: [] as Array<TGetUserCategoriesResponse>,
  });

  const initialValues = {
    title: CustomString.Empty,
    price: null as unknown as number,
    currencyId: CustomString.Empty,
    categoryId: CustomString.Empty,
    date: new Date(),
    isDefault: false,
    isTemplate: false,
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
      updateInitValues({
        ...values,
        backgroundColor: undefined,
        textColor: undefined,
      });
    }
  };

  useEffect(() => {
    (async () => {
      const [currencies, categories] = await callToApis([
        CurrencyApi.getCurrencies(),
        CategoryApi.getUserCategories(),
      ]);

      setState((prev) => ({
        ...prev,
        currency: currencies.data ?? [],
        category: categories.data ?? [],
      }));
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
    console.log(values);
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
