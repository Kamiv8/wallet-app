import { TSelectItem } from '../../atoms/Select/Select';
import { TColor, TFormattedMessage } from '../../../types/types';
import { Typography, Select } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { StyledErrorMessage } from './SelectField.styles';
import { useCallback } from 'react';

export type TProps = {
  selectItems: TSelectItem[];
  label: TFormattedMessage;
  variant: 'light' | 'dark' | 'error';
  name?: string;
  onChange?: any;
  error?: string;
};

export const SelectField = (props: TProps) => {
  const setVariantControl = useCallback(
    (isLabel = false): TColor => {
      if (props?.error) return 'error';

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
        <Typography size={'m'} weight={700} color={setVariantControl(true)}>
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
      <Select
        items={props.selectItems}
        onChange={props.onChange}
        isRounded
        name={props.name}
        color={setVariantControl()}
      />
      <StyledErrorMessage size={'xs'} color={'error'}>
        {props.error ?? props.error}
      </StyledErrorMessage>
    </div>
  );
};
