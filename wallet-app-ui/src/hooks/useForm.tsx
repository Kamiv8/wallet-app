import { useCallback, useState } from 'react';
import { ApiStatus, IApiResult } from '../models/apiResult';
import { useMapValidationMessages } from './useMapValidationMessages';
import * as yup from 'yup';
import { useFetch } from './useFetch';

export enum FieldType {
  Text = 1,
  Number = 2,
  Checkbox = 3,
  Icon = 4,
  Email = 5,
  Date = 6,
  Select = 7,
}

export const useForm = <T,>(
  initialValues: T,
  validationSchema?: yup.ObjectSchema<yup.Maybe<any>>,
) => {
  const { getMessageByFieldName } = useMapValidationMessages();
  const { callToApi } = useFetch();

  const [values, setValues] = useState<T>(initialValues);

  const [validValues, setValidValues] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>,
  );

  const getValidationMessage = useCallback(
    (field: keyof T) => {
      if (!validValues) return undefined;
      return validValues[field];
    },
    [validValues],
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setValidValues({} as Record<keyof T, string>);
  }, []);

  const handleChange = useCallback(
    (event: any, fieldName: keyof T, type: FieldType = FieldType.Text) => {
      let typedValue: number | string | Date | null = null;
      switch (type) {
        case FieldType.Number:
          typedValue = +event.target.value;
          break;
        case FieldType.Checkbox:
          typedValue = event.target.checked;
          break;
        case FieldType.Icon:
          typedValue = event;
          break;
        case FieldType.Email:
          typedValue = event.target.value;
          break;
        case FieldType.Select:
          typedValue = event;
          break;
        case FieldType.Date:
          typedValue = new Date(event.target.value);
          break;
        default:
          typedValue = event.target.value;
          break;
      }

      setValues((prevState) => ({
        ...prevState,
        [fieldName]: typedValue,
      }));
    },
    [values],
  );

  const onSubmit = useCallback(
    async <K = any,>(
      api: (value: T) => Promise<IApiResult<K>>,
      withSuccessModal = false,
    ) => {
      try {
        await validationSchema?.validate(values, {
          abortEarly: false,
        });
        return await callToApi(api(values), withSuccessModal);
      } catch (e: any) {
        const newErrors = {} as Record<keyof T, string>;
        e.inner?.forEach((error: any) => {
          newErrors[error.path as keyof T] = error.message;
        });
        setValidValues(newErrors);
        return {
          data: null,
          status: ApiStatus.ERROR,
        } as IApiResult;
      }
    },
    [values],
  );

  const loadToEditValues = useCallback(<K = any,>(oldValues: K) => {
    setValues((prev) => ({
      ...prev,
      ...oldValues,
    }));
  }, []);

  return {
    values,
    handleChange,
    resetForm,
    onSubmit,
    getMessageByFieldName,
    getValidationMessage,
    loadToEditValues,
  };
};
