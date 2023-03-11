import { ReactNode } from 'react';
import {
  CloseWrapper,
  StyledCloseIcon,
  StyledWrapper,
} from './CardWrapper.styled';

export type TProps = {
  gradientColor?: boolean;
  color?: string;
  children?: ReactNode | ReactNode[];
  close?: () => void;
};

const CardWrapper = (props: TProps) => {
  return (
    <StyledWrapper color={props.color} gradientColor={props.gradientColor}>
      {props.close && (
        <CloseWrapper>
          <StyledCloseIcon onClick={props.close} />
        </CloseWrapper>
      )}

      {props.children}
    </StyledWrapper>
  );
};

export default CardWrapper;
