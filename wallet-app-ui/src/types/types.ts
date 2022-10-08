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
