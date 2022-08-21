import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TProps } from './Typography';

const StyledTypography = styled.p`
  font-weight: ${({ theme, weight = 400 }: TProps & { theme: TTheme }) =>
    theme.weight[weight]};
  font-size: ${({ theme, size }: TProps & { theme: TTheme }) =>
    theme.fonts[size]};
  color: ${({ theme, color = 'darkBlue' }: TProps & { theme: TTheme }) =>
    theme.colors[color]};
  text-decoration: ${(props) => props.underline && 'underline'};
  font-family: 'Source Code Pro', sans-serif;
`;

export default StyledTypography;
