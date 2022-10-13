import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TProps } from './Button';

const StyledButton = styled.button<TProps>`
  color: ${({ theme, color = 'orange' }: TProps & { theme: TTheme }) =>
    theme.colors[color]};
  border-radius: 5px;
  border: 2px solid
    ${({ theme, color = 'orange' }: TProps & { theme: TTheme }) =>
      theme.colors[color]};
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
`;

export default StyledButton;
