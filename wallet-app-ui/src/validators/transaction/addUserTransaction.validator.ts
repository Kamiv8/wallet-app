import * as yup from 'yup';
import { TAddUserTransactionForm } from '../../models/apiTypes/transaction';
import { hexColorRegex } from '../../const';
export const addUserTransactionSchema = yup
  .object<TAddUserTransactionForm>()
  .shape({
    title: yup.string().required().min(3).max(50),
    price: yup.number().required(),
    date: yup
      .date()
      .test(
        'is-future-date',
        'Date must be in the past or today',
        (value, context) => {
          const { createError } = context;
          const currentDate = new Date();
          const inputDate = new Date(value as Date);
          if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
            return createError({
              message: 'Date must be in the past or today',
            });
          }
          return true;
        },
      ),
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
