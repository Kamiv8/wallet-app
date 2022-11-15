import { ReactNode } from 'react';
import StyledButton from './Button.style';
import { ReactComponent as PlusIcon } from '../../../assets/images/plus.svg';

export type TVariantButton = 'text' | 'add';

export type TProps = {
  children?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  color?: 'orange' | 'lightBlue' | 'darkBlue';
  disabled?: boolean;
  variant?: TVariantButton;
  onClick?: () => any;
};

const Button = (props: TProps) => (
  <>
    {props.variant === 'add' ? (
      <StyledButton {...props}>
        <PlusIcon />
      </StyledButton>
    ) : (
      <StyledButton {...props}>{props.children}</StyledButton>
    )}
  </>
);

export default Button;
