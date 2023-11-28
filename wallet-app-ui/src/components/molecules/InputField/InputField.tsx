import Typography from '../../atoms/Typography/Typography';
import Input from '../../atoms/Input/Input';
import { ChangeEvent, useCallback } from "react";
import { StyledErrorMessage } from './InputField.styles';
import { TColor, TFormattedMessage } from "../../../types/types";
import { FormattedMessage } from 'react-intl';

export type TProps = {
  label: TFormattedMessage;
  variant: 'light' | 'dark' | "error";
  placeholder?: TFormattedMessage;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'date' | 'number';
};

const InputField = ({
  label,
  variant,
  placeholder,
  onChange,
  error,
  name,
  type = 'text',
  ...props
}: TProps) => {

  const setVariantControl = useCallback((isLabel = false) : TColor => {

    if (error) return "error";

    switch (variant) {
      case "light":
        return isLabel ? "lightBlue" : "orange";
      case "dark":
        return "darkBlue";
      default:
        return "orange"
    }
  }, [variant, error]);


  return (
    <div>
      <label>
        <Typography
          size={'m'}
          weight={700}
          color={setVariantControl(true)}
        >
          <FormattedMessage {...label} />
        </Typography>
      </label>

      <Input
        color={setVariantControl()}
        placeholder={placeholder?.defaultMessage}
        onChange={onChange}
        type={type}
        name={name}
        {...props}
      />
      {error && (
        <StyledErrorMessage size={'xs'} color={'error'}>
          {error}
        </StyledErrorMessage>
      )}
    </div>
  );
};

export default InputField;
