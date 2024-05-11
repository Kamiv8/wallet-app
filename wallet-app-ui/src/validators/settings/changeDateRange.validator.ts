import * as yup from 'yup';
import { ChangeDateRangeForm } from '../../models/apiTypes/settings';
import { DateRangeOption } from '../../types/enums';

export const changeDateRangeSchema = yup.object<ChangeDateRangeForm>().shape({
  option: yup.mixed<DateRangeOption>().oneOf([1, 2]).required(),
  customDate: yup.date().when('option', ([option], schema) =>
    option === DateRangeOption.CUSTOM_DATE
      ? schema.test(
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
        )
      : schema.notRequired(),
  ),
  customDay: yup
    .number()
    .when('option', ([option], schema) =>
      option === DateRangeOption.CUSTOM_DAY
        ? schema.min(1).max(28).required()
        : schema.notRequired(),
    ),
});
