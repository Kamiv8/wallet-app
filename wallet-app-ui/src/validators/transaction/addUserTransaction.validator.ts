import * as yup from 'yup';
import { TAddUserTransactionForm } from '../../models/apiTypes/transaction';
import { hexColorRegex } from '../../const/regex';
export const addUserTransactionSchema = yup
  .object<TAddUserTransactionForm>()
  .shape({
    title: yup.string().required().min(3).max(50),
    price: yup.number().required(),
    date: yup
      .date()
      .required()
      .test((value) => {
        const currentDate = new Date();
        const inputDate = new Date(value);
        return inputDate && inputDate <= currentDate;
      }),
    currencyId: yup.string().required(),
    categoryId: yup.string().required(),
    isDefault: yup.boolean(),
    description: yup.string().min(1).max(500),
    textColor: yup
      .string()
      .when('isDefault', ([isDefault], schema) =>
        isDefault
          ? schema.matches(hexColorRegex).required()
          : schema.notRequired(),
      ),
    backgroundColor: yup
      .string()
      .when('isDefault', ([isDefault], schema) =>
        isDefault
          ? schema.matches(hexColorRegex).required()
          : schema.notRequired(),
      ),
  });
