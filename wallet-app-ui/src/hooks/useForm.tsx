import { useCallback, useEffect, useState } from 'react';

export enum FieldType {
  Text = 1,
  Number = 2,
  Checkbox = 3,
  Icon = 4,
  Email = 5,
}

type TInitialValues = {
  [key: string]: any;
};

type TValidValues = {
  [key: string]: boolean;
};

const useForm = <T,>(initialValues: T) => {
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

  const handleValidValues = useCallback((fieldName: string, value: boolean) => {
    setValidValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }, []);

  const handleChange = useCallback(
    (event: any, fieldName: string, type: FieldType = FieldType.Text) => {
      let typedValue: number | string | null = null;
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
          handleValidValues(fieldName, event.target.value === '');
          break;
        default:
          typedValue = event.target.value;
          handleValidValues(fieldName, event.target.value === '');
          break;
      }
      setValues((prevState) => ({
        ...prevState,
        [fieldName]: typedValue,
      }));
    },
    [values],
  );

  const isError = useCallback(() => {}, []);

  return { values, handleChange, isError, isDisabled };
};
export default useForm;
