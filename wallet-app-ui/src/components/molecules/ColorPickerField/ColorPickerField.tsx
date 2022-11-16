import { ChangeEvent } from 'react';
import ColorPicker from '../../atoms/ColorPicker/ColorPicker';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import { TColor, TFormattedMessage } from '../../../types/types';
import { Wrapper } from './ColorPickerField.styles';

export type TProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: TFormattedMessage;
  color: TColor;
};

const ColorPickerField = (props: TProps) => {
  return (
    <Wrapper>
      <ColorPicker {...props} />
      <label>
        <Typography size={'m'} weight={700} color={props.color}>
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
    </Wrapper>
  );
};

export default ColorPickerField;
