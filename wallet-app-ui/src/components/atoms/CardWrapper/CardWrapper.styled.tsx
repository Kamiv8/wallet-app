import styled, { css } from 'styled-components';
import { TProps } from './CardWrapper';
import { TTheme } from '../../../styles/theme';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';

export const StyledWrapper = styled.div<
  Pick<TProps, 'color' | 'gradientColor'>
>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
  ${({ gradientColor }) =>
    gradientColor &&
    css`
      background: ${({ theme }: { theme: TTheme }) => theme.gradients.main};
    `}
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
