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

export const Wrapper = styled.div``;

export const SelectButton = styled.span<SelectStyleProps>`
  display: inline-flex;
  width: 100%;
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
  width: 100%;
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
