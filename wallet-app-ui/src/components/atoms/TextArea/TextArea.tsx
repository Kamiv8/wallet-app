import StyledTextArea from './TextArea.style';
import { ChangeEvent } from 'react';

export type TProps = {
  color: 'orange' | 'darkBlue' | 'error';
  name: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = (props: TProps) => {
  return (
    <StyledTextArea
      color={props.color}
      onChange={(e) => props.onChange(e)}
      name={props.name}
      placeholder={props.placeholder || ''}
    />
  );
};
