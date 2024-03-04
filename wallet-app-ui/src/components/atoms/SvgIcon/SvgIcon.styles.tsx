import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TColor } from '../../../types/types';

type SvgProps = {
  color: string | TColor;
  withStroke?: boolean;
};
export const WrapperIcon = styled.span<SvgProps>`
  cursor: pointer;
  path {
    stroke: ${({ theme, color }: SvgProps & { theme: TTheme }) =>
      Object.keys(theme.colors).includes(color)
        ? theme.colors[color as TColor]
        : color};
    fill: ${({ theme, color }: SvgProps & { theme: TTheme }) =>
      Object.keys(theme.colors).includes(color)
        ? theme.colors[color as TColor]
        : color};
  }
  ${({ withStroke }) =>
    !withStroke &&
    css`
      path {
        stroke: none;
        fill: ${({ theme, color }: SvgProps & { theme: TTheme }) =>
          Object.keys(theme.colors).includes(color)
            ? theme.colors[color as TColor]
            : color};
      }
    `}
`;
