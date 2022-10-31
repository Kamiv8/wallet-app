import { ReactNode } from 'react';
import StyledButton from './Button.style';

export type TVariantButton = 'text' | 'add';

export type TProps = {
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  color?: 'orange' | 'lightBlue' | 'darkBlue';
  disabled?: boolean;
  variant?: TVariantButton;
  onClick?: () => any;
};

const Button = (props: TProps) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
