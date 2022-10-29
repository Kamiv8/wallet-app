import Typography from '../../atoms/Typography/Typography';
import Input from '../../atoms/Input/Input';
import { ChangeEvent } from 'react';
import { StyledErrorMessage } from './InputField.styles';
import { TFormattedMessage } from '../../../types/types';
import { FormattedMessage } from 'react-intl';

export type TProps = {
  label: TFormattedMessage;
  variant: 'light' | 'dark';
  placeholder?: TFormattedMessage;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  type?: 'text' | 'email' | 'password';
};

const InputField = ({
  label,
  variant,
  placeholder,
  onChange,
  error,
  name,
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
          <FormattedMessage {...label} />
        </Typography>
      </label>
      <Input
        color={variant === 'light' ? 'orange' : 'darkBlue'}
        placeholder={placeholder?.defaultMessage}
        onChange={onChange}
        type={type}
        name={name}
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
