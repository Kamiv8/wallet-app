import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TTheme } from '../../../styles/theme';
import { Typography } from '../Typography/Typography';

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  &.active {
    background-color: ${({ theme }: { theme: TTheme }) =>
      theme.colors.orangeNavigation};
    border: 1px solid ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
    border-radius: 10px;
  }
`;

export const StyledLi = styled.li`
  list-style: none;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const StyledTypography = styled(Typography)`
  margin-left: 30px;
`;
