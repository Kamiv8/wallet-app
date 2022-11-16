import styled from 'styled-components';
import { TProps } from './Checkbox';
import { TTheme } from '../../../styles/theme';

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid
    ${({ theme, color }: TProps & { theme: TTheme }) => theme.colors[color]};
  display: grid;
  place-content: center;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    transform: scale(0);
    transition: 150ms transform ease-in-out;
    box-shadow: inset 1em 1em
      ${({ theme, color }: TProps & { theme: TTheme }) => theme.colors[color]};
  }
  &:checked:before {
    transform: scale(1);
  }
`;
