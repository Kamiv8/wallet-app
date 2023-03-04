import { ChangeEvent } from 'react';
import { StyledInput } from './ColorPicker.styles';
import { TColor } from '../../../types/types';

export type TProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  color?: TColor;
};

const ColorPicker = (props: TProps) => {
  return <StyledInput {...props} type={'color'} />;
};

export default ColorPicker;
