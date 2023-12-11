import StyledInput from './Input.style';
import { ChangeEvent } from 'react';
import { TColor } from '../../../types/types';

type TProps = {
  color: TColor;
  name: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'date' | 'number';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: TProps) => {
  return <StyledInput {...props} />;
};
