import * as yup from 'yup';
import { AddUserNoteForm } from '../../models/apiTypes/note';
import { hexColorRegex } from '../../const/regex';

export const createUserSchema = yup.object<AddUserNoteForm>().shape({
  title: yup.string().required().min(1).max(50),
  text: yup.string().required().min(1).max(500),
  textColor: yup.string().matches(hexColorRegex).required(),
  backgroundColor: yup.string().matches(hexColorRegex).required(),
});
