import { TSelectedIcon } from '../../../../components/organisms/RegisterForm/RegisterForm';

export type TRegisterForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  iconId: TSelectedIcon;
};
