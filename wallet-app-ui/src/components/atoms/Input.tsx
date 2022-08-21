import StyledInput from './Input.style';
import { ChangeEvent } from 'react';

type TProps = {
  color: 'orange' | 'darkBlue' | 'error';
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: TProps) => {
  return <StyledInput {...props} />;
};
export default Input;
