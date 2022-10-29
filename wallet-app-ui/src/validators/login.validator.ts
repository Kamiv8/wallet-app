import { TValidProps } from '../types/types';

const LoginValidator = {
  email: {
    default: true,
    min: 2,
    max: 10,
  } as TValidProps,
  password: {
    default: true,
    min: 2,
    max: 10,
  } as TValidProps,
};

export default LoginValidator;
