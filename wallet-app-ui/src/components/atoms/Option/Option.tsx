import { TColor } from '../../../types/types';
import { FC, ReactNode } from 'react';
import {
  DescriptionWrapper,
  ExtraDescriptionWrapper,
  StyledOption,
} from './Option.styles';

type Props = {
  onClick: () => void;
  color: TColor;
  isRounded?: boolean;
  extraDescription?: ReactNode;
  children?: ReactNode;
};

export const Option: FC<Props> = ({
  onClick,
  color,
  isRounded,
  children,
  extraDescription,
}) => {
  return (
    <StyledOption color={color} isRounded={isRounded} onClick={() => onClick()}>
      <DescriptionWrapper>{children}</DescriptionWrapper>
      {extraDescription && (
        <ExtraDescriptionWrapper>{extraDescription}</ExtraDescriptionWrapper>
      )}
    </StyledOption>
  );
};
