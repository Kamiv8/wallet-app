import { StyledCheckbox } from './Checkbox.styles';
import { TColor } from '../../../types/types';
import { ChangeEvent } from 'react';

export type TProps = {
  color: TColor;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = (props: TProps) => {
  return <StyledCheckbox {...props} type={'checkbox'} />;
};
