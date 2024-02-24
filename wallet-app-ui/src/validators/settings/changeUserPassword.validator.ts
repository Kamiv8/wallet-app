import * as yup from 'yup';
import { ChangePasswordForm } from '../../models/apiTypes/settings';
import { passwordRegex } from '../../const/regex';

export const changeUserPasswordValidator = yup
  .object<ChangePasswordForm>()
  .shape({
    oldPassword: yup.string().required().min(8).max(40).matches(passwordRegex, {
      message:
        'The password must include a special character, a digit, and a capital letter.',
    }),
    newPassword: yup.string().required().min(8).max(40).matches(passwordRegex, {
      message:
        'The password must include a special character, a digit, and a capital letter.',
    }),
    confirmPassword: yup
      .string()
      .required()
      .min(8)
      .max(40)
      .matches(passwordRegex, {
        message:
          'The password must include a special character, a digit, and a capital letter.',
      })
      .oneOf([yup.ref('password')], 'Passwords must match'),
  });
