import * as yup from 'yup';
import { TChangeForgotPasswordForm } from '../../models/apiTypes/account/changeForgotPassword/changeForgotPassword.form';
import { passwordRegex } from '../../const/regex';

export const changeForgotPasswordSchema = yup
  .object<TChangeForgotPasswordForm>()
  .shape({
    password: yup.string().required().min(8).max(40).matches(passwordRegex, {
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
