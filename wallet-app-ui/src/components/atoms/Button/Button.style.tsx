import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TProps } from './Button';

const StyledButton = styled.button`
  color: ${({ theme, color = 'orange' }: TProps & { theme: TTheme }) =>
    theme.colors[color]};
  border-radius: 5px;
  border: 2px solid
    ${({ theme, color = 'orange' }: TProps & { theme: TTheme }) =>
      theme.colors[color]};
  background: none;
  font-weight: ${({ theme }) => theme.weight[700]};
  height: 26px;
  width: 65px;
  cursor: pointer;
`;

export default StyledButton;
