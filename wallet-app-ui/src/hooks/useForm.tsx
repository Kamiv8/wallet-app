import { useCallback, useEffect, useState } from "react";
import { ApiStatus, IApiResult } from "../models/apiResult";
import { useMapValidationMessages } from "./useMapValidationMessages";

export enum FieldType {
  Text = 1,
  Number = 2,
  Checkbox = 3,
  Icon = 4,
  Email = 5,
  Date = 6,
  Select = 7,
}

type TInitialValues = {
  [key: string]: any;
};

type TValidValues = {
  [key: string]: boolean;
};

const useForm = <T, >(initialValues: T) => {
  const { loadMessages, getMessageByFieldName } = useMapValidationMessages();

  const [values, setValues] = useState<TInitialValues>(initialValues);

  const [validValues, setValidValues] = useState<TValidValues | null>(null);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (validValues !== null) {
      if (
        Object.keys(initialValues).length !== Object.keys(validValues).length
      ) {
        setIsDisabled(true);
        return;
      }
      for (const item in validValues) {
        if (
          validValues[item] &&
          Object.keys(initialValues).length !== Object.keys(validValues).length
        ) {
          setIsDisabled(true);
          return;
        }
      }
      setIsDisabled(false);
    }
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setValidValues(null);
  }, []);

  const handleValidValues = useCallback((fieldName: string, value: boolean) => {
    setValidValues((prevState) => ({
      ...prevState,
      [fieldName]: value
    }));
  }, []);

  const handleChange = useCallback(
    (event: any, fieldName: string, type: FieldType = FieldType.Text) => {
      let typedValue: number | string | Date | null = null;
      switch (type) {
        case FieldType.Number:
          typedValue = +event.target.value;
          handleValidValues(fieldName, +event.target.value === 0);
          break;
        case FieldType.Checkbox:
          typedValue = event.target.checked;
          break;
        case FieldType.Icon:
          typedValue = event;
          handleValidValues(fieldName, event === 0);
          break;
        case FieldType.Email:
          typedValue = event.target.value;
          handleValidValues(fieldName, event.target.value === "");
          break;
        case FieldType.Select:
          typedValue = event;
          handleValidValues(fieldName, event === "");
          break;
        case FieldType.Date:
          typedValue = new Date(event.target.value);
          break;
        default:
          typedValue = event.target.value;
          handleValidValues(fieldName, event.target.value === "");
          break;
      }

      setValues((prevState) => ({
        ...prevState,
        [fieldName]: typedValue
      }));
    },
    [values]
  );

  const isError = useCallback(() => {
  }, []);


  const onSubmit = useCallback(async <K = any, >(api: (value: TInitialValues) => Promise<IApiResult<K>>) => {
    try {
      return await api(values);
    } catch (e: any) {
      loadMessages(e?.validationMessages);
      return {
        data: null,
        status: ApiStatus.ERROR
      } as IApiResult
    }
  }, [values]);

  return { values, handleChange, isError, isDisabled, resetForm, onSubmit, getMessageByFieldName };
};
export default useForm;
