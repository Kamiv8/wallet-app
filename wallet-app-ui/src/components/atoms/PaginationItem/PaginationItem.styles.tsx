import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const StyledLi = styled.li<{ isCurrent: boolean }>`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.lightBlue};
  font-weight: bold;
  font-size: ${({ theme }: { theme: TTheme }) => theme.fonts.m};
  list-style: none;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  width: 30px;
  cursor: pointer;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-radius: 2px;
      color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
      border: 1px solid ${({ theme }: { theme: TTheme }) => theme.colors.orange};
    `};
`;
