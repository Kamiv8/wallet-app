import styled, { css } from 'styled-components';
import { TProps } from './CardWrapper';
import { TTheme } from '../../../styles/theme';
import { media } from '../../../styles/mediaQueries.helper';

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
    
    ${media.desktop`
      grid-column: 1 / -1;
      
    `}
`;

export const CloseWrapper = styled.div<{ isTitle?: boolean }>`
  display: flex;
  justify-content: flex-end;
  ${({ isTitle }) =>
    isTitle &&
    css`
      justify-content: space-between;
    `}
`;
