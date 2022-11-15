import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.div``;

export const SelectButton = styled.span<{
  isActive: boolean;
  isRounded?: boolean;
}>`
  display: inline-flex;
  width: 65px;
  height: 26px;
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

  ${({ isRounded }) =>
    isRounded &&
    css`
      width: 100%;
      justify-content: space-between;
      padding: 5px 20px;
      border: 2px solid
        ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
      color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
    `}
`;

export const OptionWrapper = styled.ul<{ isRounded?: boolean }>`
  border: 2px solid ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  width: 65px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  ${({ isRounded }) =>
    isRounded &&
    css`
      width: 100%;
      padding: 5px 20px;
      border: 2px solid
        ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
      color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
      position: relative;
      z-index: 2;
    `}
`;

export const Option = styled.li<{ isRounded?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Source Code Pro', sans-serif;
  font-size: ${({ theme }: { theme: TTheme }) => theme.fonts.s};
  border-bottom: 2px solid
    ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  height: 26px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }: { theme: TTheme }) =>
      theme.colors.orangeHover};
  }
  ${({ isRounded }) =>
    isRounded &&
    css`
      width: 100%;
      color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
      border-bottom: 2px solid
        ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
    `}
`;
