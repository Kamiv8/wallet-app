import { ChangeEvent } from 'react';
import { ColorPicker, Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { TColor, TFormattedMessage } from '../../../types/types';
import { Wrapper } from './ColorPickerField.styles';
import { useRwd } from '../../../hooks';

export type TProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: TFormattedMessage;
  color: TColor;
  defaultValue?: string;
};

export const ColorPickerField = (props: TProps) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper>
      <ColorPicker {...props} />
      <label>
        <Typography
          size={getRwdValue('m', 'l')}
          weight={700}
          color={props.color}
        >
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
    </Wrapper>
  );
};
