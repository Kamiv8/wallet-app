import { ReactNode } from 'react';
import StyledTypography from './Typography.styles';

export type TProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  children: ReactNode;
  weight?: 400 | 700;
  underline?: boolean;
  uppercase?: boolean;
  color?: 'orange' | 'lightBlue' | 'darkBlue' | 'error' | 'green' | 'red';
  letterSpacing?: number;
};

export const Typography = (props: TProps) => (
  <StyledTypography {...props}>{props.children}</StyledTypography>
);

export default Typography;
