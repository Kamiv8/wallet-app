import { TColor, TFormattedMessage } from '../../../types/types';
import { ChangeEvent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { TextArea, Typography } from '../../atoms';
import { StyledErrorMessage } from './TextAreaField.style';
import { useRwd } from '../../../hooks';

type TProps = {
  label: TFormattedMessage;
  variant: 'light' | 'dark' | 'error';
  placeholder?: TFormattedMessage;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  value?: string;
  error?: string;
};

export const TextAreaField = (props: TProps) => {
  const { getRwdValue } = useRwd();
  const setVariantControl = useCallback(
    (isLabel = false): TColor => {
      if (props.error) return 'error';

      switch (props.variant) {
        case 'light':
          return isLabel ? 'lightBlue' : 'orange';
        case 'dark':
          return 'darkBlue';
        default:
          return 'orange';
      }
    },
    [props.variant, props.error],
  );

  return (
    <div>
      <label>
        <Typography
          size={getRwdValue('m', 'l')}
          weight={700}
          color={setVariantControl(true)}
        >
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
      <TextArea
        color={setVariantControl()}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder?.defaultMessage}
        value={props.value}
      />
      <StyledErrorMessage size={getRwdValue('xs', 's')} color={'error'}>
        {props.error && props.error}
      </StyledErrorMessage>
    </div>
  );
};
