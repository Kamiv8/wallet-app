import { Typography, Input } from '../../atoms';
import { ChangeEvent, useCallback } from 'react';
import { StyledErrorMessage } from './InputField.styles';
import { TColor, TFormattedMessage } from '../../../types/types';
import { FormattedMessage } from 'react-intl';
import { useRwd } from '../../../hooks/useRwd';

export type TProps = {
  label: TFormattedMessage;
  variant: 'light' | 'dark' | 'error';
  placeholder?: TFormattedMessage;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'date' | 'number';
  value?: string | number;
};

export const InputField = ({
  label,
  variant,
  placeholder,
  onChange,
  error,
  name,
  value,
  type = 'text',
  ...props
}: TProps) => {
  const { getRwdValue } = useRwd();
  const setVariantControl = useCallback(
    (isLabel = false): TColor => {
      if (error) return 'error';

      switch (variant) {
        case 'light':
          return isLabel ? 'lightBlue' : 'orange';
        case 'dark':
          return 'darkBlue';
        default:
          return 'orange';
      }
    },
    [variant, error],
  );

  return (
    <div>
      <label>
        <Typography
          size={getRwdValue('m', 'l')}
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
        value={value}
        {...props}
      />
      <StyledErrorMessage size={getRwdValue('xs', 's')} color={'error'}>
        {error ?? error}
      </StyledErrorMessage>
    </div>
  );
};
