import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const SelectButton = styled.span`
  display: inline-block;
  width: 65px;
  height: 26px;
  border: 2px solid ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  border-radius: 5px;
  color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  margin: auto;
`;
