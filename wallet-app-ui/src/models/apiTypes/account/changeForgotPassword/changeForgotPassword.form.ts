export type TChangeForgotPasswordForm = {
  password: string;
  confirmPassword: string;
};

export type TChangeForgotPasswordFormDto = {
  password: string;
  confirmPassword: string;
  token: string;
  email: string;
};
