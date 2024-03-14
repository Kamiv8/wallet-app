import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TColor } from '../../../types/types';

type OptionStyleProps = {
  color?: TColor;
  isRounded?: boolean;
};

export const StyledOption = styled.li<OptionStyleProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-family: 'Source Code Pro', sans-serif;
  font-size: ${({ theme }: { theme: TTheme }) => theme.fonts.s};
  border-bottom: 2px solid
    ${({ theme, color }: OptionStyleProps & { theme: TTheme }) =>
      color ? theme.colors[color] : theme.colors.orange};
  color: ${({ theme, color }: OptionStyleProps & { theme: TTheme }) =>
    color ? theme.colors[color] : theme.colors.orange};
  height: 26px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }: { theme: TTheme }) =>
      theme.colors.orangeHover};
  }
  ${({ isRounded, color }) =>
    isRounded &&
    css`
      width: 100%;
      color: ${({ theme }: { theme: TTheme }) =>
        color ? theme.colors[color] : theme.colors.darkBlue};
      border-bottom: 2px solid
        ${({ theme }: { theme: TTheme }) =>
          color ? theme.colors[color] : theme.colors.darkBlue};
    `}
`;

export const DescriptionWrapper = styled.span`
  width: 100%;
  text-align: center;
`;

export const ExtraDescriptionWrapper = styled.span`
  width: 30%;
`;
