import Checkbox from '../../atoms/Checkbox/Checkbox';
import { ChangeEvent } from 'react';
import { TColor, TFormattedMessage } from '../../../types/types';
import { Wrapper } from './CheckboxField.styles';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';

export type TProps = {
  label: TFormattedMessage;
  color: TColor;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField = (props: TProps) => {
  return (
    <Wrapper>
      <Checkbox {...props} />
      <label>
        <Typography weight={700} size={'m'} color={props.color}>
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
    </Wrapper>
  );
};
export default CheckboxField;
