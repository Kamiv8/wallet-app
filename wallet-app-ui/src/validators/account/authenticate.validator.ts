import * as yup from 'yup';
import { passwordRegex } from '../../const/regex';
import { TAuthenticateForm } from '../../models/apiTypes/account/authenticate/authenticate.form';
export const authenticateSchema = yup.object<TAuthenticateForm>().shape({
  username: yup.string().required().min(3).max(40),
  password: yup.string().required().min(8).max(40).matches(passwordRegex, {
    message:
      'The password must include a special character, a digit, and a capital letter.',
  }),
});
