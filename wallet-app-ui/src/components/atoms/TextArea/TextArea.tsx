import StyledTextArea from './TextArea.style';
import { ChangeEvent } from 'react';
import { TColor } from '../../../types/types';

export type TProps = {
  color: TColor;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = (props: TProps) => {
  return (
    <StyledTextArea
      color={props.color}
      onChange={(e) => props.onChange(e)}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder || ''}
    />
  );
};
