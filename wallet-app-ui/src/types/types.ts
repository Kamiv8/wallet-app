import { ReactNode } from 'react';

export type TFormattedMessage = {
  id?: string;
  defaultMessage?: string;
  value?: Record<string, ReactNode>;
};

export type TValidProps = {
  default?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
};

export type TColor =
  | 'white'
  | 'orange'
  | 'darkBlue'
  | 'lightBlue'
  | 'red'
  | 'green'
  | 'error';

export type RadioButtonOption = {
  value: any;
  label: TFormattedMessage;
};

export type TRadioButtonOptions = {
  legendMessage?: TFormattedMessage;
  name: string;
  align: 'vertical' | 'horizontal';
  options: Array<RadioButtonOption>;
};
