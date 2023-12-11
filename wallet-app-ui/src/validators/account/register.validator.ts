import * as yup from 'yup';
import { passwordRegex } from '../../const/regex';
import { TRegisterForm } from '../../models/apiTypes/account/register/register.form';
import { TSelectedIcon } from '../../components/organisms/RegisterForm/RegisterForm';

export const registerSchema = yup.object<TRegisterForm>().shape({
  username: yup.string().required().min(3).max(40),
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
  email: yup.string().email().required(),
  iconId: yup.mixed<TSelectedIcon>().oneOf([0, 1, 2, 3, 4]).required(),
});
