import { ReactNode } from 'react';
import { CloseWrapper, StyledWrapper } from './CardWrapper.styled';
import theme from '../../../styles/theme';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
export type TProps = {
  gradientColor?: boolean;
  color?: string;
  children?: ReactNode | ReactNode[];
  close?: () => void;
  iconColor?: string;
};

export const CardWrapper = ({
  gradientColor,
  color,
  children,
  close,
  iconColor,
}: TProps) => {
  return (
    <StyledWrapper color={color} gradientColor={gradientColor}>
      {close && (
        <CloseWrapper>
          <SvgIcon
            Icon={CloseIcon}
            color={iconColor ?? theme.colors.darkBlue}
            onClick={close}
          />
        </CloseWrapper>
      )}
      {children}
    </StyledWrapper>
  );
};
