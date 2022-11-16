import styled, { css } from 'styled-components';
import { TProps } from './CardWrapper';
import { TTheme } from '../../../styles/theme';

export const StyledWrapper = styled.div<TProps>`
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
