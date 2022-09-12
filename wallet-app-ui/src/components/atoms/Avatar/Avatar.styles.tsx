import styled from 'styled-components';
import { TProps } from './Avatar';
import { TTheme } from '../../../styles/theme';

export const StyledAvatar = styled.div`
  cursor: pointer;
  border: ${({ selected, theme }: TProps & { theme: TTheme }) =>
    selected && `3px solid ${theme.colors.orange}`};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${({ image }: TProps) => image});
  background-position: center;
`;
