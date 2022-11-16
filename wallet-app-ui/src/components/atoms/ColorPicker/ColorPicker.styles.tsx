import styled from 'styled-components';
import { TProps } from './ColorPicker';
import { TTheme } from '../../../styles/theme';

export const StyledInput = styled.input`
  border: 2px solid
    ${({ theme, color = 'darkBlue' }: TProps & { theme: TTheme }) =>
      theme.colors[color]};
  -webkit-appearance: none;
  width: 30px;
  height: 20px;
  &::-webkit-color-swatch {
    border: none;
  }
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
`;
