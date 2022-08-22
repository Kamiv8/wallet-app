import Typography from '../../atoms/Typography/Typography';
import Input from '../../atoms/Input/Input';
import { ChangeEvent } from 'react';
import { StyledErrorMessage } from './InputField.styles';

export type TProps = {
  label: string;
  variant: 'light' | 'dark';
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
};

const InputField = ({
  label,
  variant,
  placeholder,
  onChange,
  error,
  type = 'text',
}: TProps) => {
  return (
    <>
      <label>
        <Typography
          size={'m'}
          weight={700}
          color={variant === 'light' ? 'lightBlue' : 'darkBlue'}
        >
          {label}
        </Typography>
      </label>
      <Input
        color={variant === 'light' ? 'orange' : 'darkBlue'}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {error && (
        <StyledErrorMessage size={'xs'} color={'error'}>
          {error}
        </StyledErrorMessage>
      )}
    </>
  );
};

export default InputField;
