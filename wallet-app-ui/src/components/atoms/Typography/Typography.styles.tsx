import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { TProps } from './Typography';

const StyledTypography = styled.p`
  font-weight: ${({ theme, weight = 400 }: TProps & { theme: TTheme }) =>
    theme.weight[weight]};
  font-size: ${({ theme, size }: TProps & { theme: TTheme }) =>
    theme.fonts[size]};
  color: ${({
    theme,
    color = 'darkBlue',
    customColor,
  }: TProps & { theme: TTheme }) =>
    !customColor ? theme.colors[color] : customColor};
  text-decoration: ${(props) => props.underline && 'underline'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  font-family: 'Source Code Pro', sans-serif;
  margin: 0;
  padding: 0;
  letter-spacing: ${({ letterSpacing }: TProps) => `${letterSpacing}px`};
`;

export default StyledTypography;
