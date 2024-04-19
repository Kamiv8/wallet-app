import { ChangeEvent } from 'react';
import { TColor, TFormattedMessage } from '../../../types/types';
import { Wrapper } from './CheckboxField.styles';
import { Typography, Checkbox } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { useRwd } from '../../../hooks';

export type TProps = {
  label: TFormattedMessage;
  color: TColor;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxField = (props: TProps) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper>
      <Checkbox {...props} />
      <label>
        <Typography
          weight={700}
          size={getRwdValue('m', 'l')}
          color={props.color}
        >
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
    </Wrapper>
  );
};
