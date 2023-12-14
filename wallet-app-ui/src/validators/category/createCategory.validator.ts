import * as yup from 'yup';
import { TCreateUserCategoryForm } from '../../models/apiTypes/category/createUserCategory/createUserCategory.form';
export const createCategorySchema = yup
  .object<TCreateUserCategoryForm>()
  .shape({
    name: yup.string().required().min(3).max(50),
  });
