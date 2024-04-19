import { ReactNode } from 'react';
import StyledTypography from './Typography.styles';
import { TColor } from '../../../types/types';
import { TFontSize } from '../../../styles/theme';

export type TProps = {
  size: keyof TFontSize;
  children: ReactNode;
  weight?: 400 | 700;
  underline?: boolean;
  uppercase?: boolean;
  color?: TColor;
  customColor?: string;
  letterSpacing?: number;
};

export const Typography = (props: TProps) => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};
