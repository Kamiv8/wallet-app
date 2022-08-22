import { ReactNode } from 'react';
import StyledButton from './Button.style';

export type TProps = {
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  color?: 'orange' | 'lightBlue' | 'darkBlue';
};

const Button = (props: TProps) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
