import { ChangeEvent } from 'react';
import { StyledInput } from './ColorPicker.styles';
import { TColor } from '../../../types/types';

export type TProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  color?: TColor;
  defaultValue?: string;
};

const ColorPicker = (props: TProps) => {
  return <StyledInput value={props.defaultValue} {...props} type={'color'} />;
};

export default ColorPicker;
