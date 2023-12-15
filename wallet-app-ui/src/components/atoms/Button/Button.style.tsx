import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TProps } from './Button';

const StyledButton = styled.button<TProps>`
  color: ${({
    theme,
    color = 'orange',
    customColor,
  }: TProps & { theme: TTheme }) =>
    !customColor ? theme.colors[color] : customColor};
  border-radius: 5px;
  border: 2px solid
    ${({ theme, color = 'orange', customColor }: TProps & { theme: TTheme }) =>
      !customColor ? theme.colors[color] : customColor};
  background: none;
  font-weight: ${({ theme }) => theme.weight[700]};
  cursor: pointer;
  padding: 10px 15px;

  ${({ variant }: TProps) =>
    variant === 'add' &&
    css`
      color: red;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 0;
      border: 0;
      box-shadow: 0 0 15px
        ${({ theme }: { theme: TTheme }) => theme.colors.orangePlaceholder};
      background-color: ${({ theme }: { theme: TTheme }) =>
        theme.colors.orange};
    `}
  ${({ isActive }: TProps) =>
    isActive &&
    css`
      color: ${({
        theme,
        color = 'orange',
        customColor,
      }: TProps & { theme: TTheme }) =>
        !customColor
          ? theme.colors[color === 'orange' ? 'darkBlue' : 'orange']
          : customColor};
      border-radius: 5px;
      border: 2px solid
        ${({
          theme,
          color = 'orange',
          customColor,
        }: TProps & { theme: TTheme }) =>
          !customColor ? theme.colors[color] : customColor};
      background-color: ${({
        theme,
        color = 'orange',
        customColor,
      }: TProps & { theme: TTheme }) =>
        !customColor ? theme.colors[color] : customColor};
      font-weight: ${({ theme }) => theme.weight[700]};
      cursor: pointer;
      padding: 10px 15px;
    `}
`;

export default StyledButton;
