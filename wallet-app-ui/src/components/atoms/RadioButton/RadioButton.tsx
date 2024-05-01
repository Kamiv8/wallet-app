import { ChangeEvent, FC } from 'react';
import { StyledRadioButton } from './RadioButton.styles';

type Props = {
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const RadioButton: FC<Props> = ({ value, onChange, name }) => {
  return (
    <StyledRadioButton
      type="radio"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
