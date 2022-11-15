import { ReactNode } from 'react';
import StyledTypography from './Typography.styles';

export type TTypographyColor =
  | 'orange'
  | 'lightBlue'
  | 'darkBlue'
  | 'error'
  | 'green'
  | 'red';

export type TTypographySize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type TProps = {
  size: TTypographySize;
  children: ReactNode;
  weight?: 400 | 700;
  underline?: boolean;
  uppercase?: boolean;
  color?: TTypographyColor;
  letterSpacing?: number;
};

export const Typography = (props: TProps) => (
  <StyledTypography {...props}>{props.children}</StyledTypography>
);

export default Typography;
