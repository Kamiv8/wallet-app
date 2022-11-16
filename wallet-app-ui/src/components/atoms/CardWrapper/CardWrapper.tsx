import { ReactNode } from 'react';
import { StyledWrapper } from './CardWrapper.styled';

export type TProps = {
  gradientColor?: boolean;
  color?: string;
  children?: ReactNode | ReactNode[];
};

const CardWrapper = (props: TProps) => {
  return (
    <StyledWrapper color={props.color} gradientColor={props.gradientColor}>
      {props.children}
    </StyledWrapper>
  );
};

export default CardWrapper;
