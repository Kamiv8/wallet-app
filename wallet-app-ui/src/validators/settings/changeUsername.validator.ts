import * as yup from 'yup';
import { TChangeUsernameForm } from '../../models/apiTypes/settings';

export const changeUsernameSchema = yup.object<TChangeUsernameForm>().shape({
  newUsername: yup.string().required().min(3).max(40),
});
