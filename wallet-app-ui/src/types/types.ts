import { ReactNode } from 'react';

export type TFormattedMessage = {
  id?: string;
  defaultMessage?: string;
  value?: Record<string, ReactNode>;
};
