import * as yup from 'yup';
import { TResetPasswordForm } from '../../models/apiTypes/account/resetPassword/resetPassword.form';

export const resetPasswordSchema = yup.object<TResetPasswordForm>().shape({
  email: yup.string().email(),
});
