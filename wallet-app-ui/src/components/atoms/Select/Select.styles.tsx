import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TColor } from '../../../types/types';

type SelectStyleProps = {
  isActive: boolean;
  isRounded?: boolean;
  color?: TColor;
};

type OptionsWrapperStyleProps = {
  isRounded?: boolean;
  color?: TColor;
};

type OptionStyleProps = {
  color?: TColor;
  isRounded?: boolean;
};

export const Wrapper = styled.div``;

export const SelectButton = styled.span<SelectStyleProps>`
  display: inline-flex;
  width: 65px;
  height: 32px;
  border: 2px solid ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  border-radius: 5px;
  color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }: { theme: TTheme }) => theme.fonts.s};
  font-family: 'Source Code Pro', sans-serif;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  ${({ isRounded, color }) =>
    isRounded &&
    css`
      width: 100%;
      justify-content: space-between;
      padding: 5px 20px;
      border: 2px solid
        ${({ theme }: { theme: TTheme }) =>
          color ? theme.colors[color] : theme.colors.darkBlue};
      color: ${({ theme }: { theme: TTheme }) =>
        color ? theme.colors[color] : theme.colors.darkBlue};
    `}
`;

export const OptionWrapper = styled.ul<OptionsWrapperStyleProps>`
  border: 2px solid
    ${({ theme, color }: OptionsWrapperStyleProps & { theme: TTheme }) =>
      color ? theme.colors[color] : theme.colors.orange};
  width: 65px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  ${({ isRounded, color }) =>
    isRounded &&
    css`
      width: 100%;
      padding: 5px 20px;
      border: 2px solid
        ${({ theme }: { theme: TTheme }) =>
          color ? theme.colors[color] : theme.colors.darkBlue};
      color: ${({ theme }: { theme: TTheme }) =>
        color ? theme.colors[color] : theme.colors.darkBlue};
      position: relative;
      z-index: 2;
    `}
`;

export const Option = styled.li<OptionStyleProps>`
  display: flex;
  justify-content: center;
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
