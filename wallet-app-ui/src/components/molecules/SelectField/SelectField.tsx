import { TSelectItem } from '../../atoms/Select/Select';
import { TFormattedMessage } from '../../../types/types';
import { Typography, Select } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { StyledErrorMessage } from './SelectField.styles';

export type TProps = {
  selectItems: TSelectItem[];
  label: TFormattedMessage;
  name?: string;
  onChange?: any;
  error?: string;
};

export const SelectField = (props: TProps) => {
  return (
    <div>
      <label>
        <Typography size={'m'} weight={700}>
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
      <Select
        items={props.selectItems}
        onChange={props.onChange}
        isRounded
        name={props.name}
      />
      {props.error && (
        <StyledErrorMessage size={'xs'} color={'error'}>
          {props.error}
        </StyledErrorMessage>
      )}
    </div>
  );
};
