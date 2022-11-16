import { ReactNode } from 'react';
import { CloseWrapper, StyledWrapper } from './CardWrapper.styled';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';

export type TProps = {
  gradientColor?: boolean;
  color?: string;
  children?: ReactNode | ReactNode[];
  close: () => void;
};

const CardWrapper = (props: TProps) => {
  return (
    <StyledWrapper color={props.color} gradientColor={props.gradientColor}>
      <CloseWrapper>
        <CloseIcon onClick={() => props.close} />
      </CloseWrapper>
      {props.children}
    </StyledWrapper>
  );
};

export default CardWrapper;
