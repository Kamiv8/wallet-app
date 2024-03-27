import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { AsideFooter } from '../../molecules/AsideFooter/AsideFooter';

export const Wrapper = styled.aside`
  width: 350px;
  height: 100vh;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.lightBlue};
  padding-top: 7.5vh;
`;

export const LogoWrapper = styled.div`
  height: 22.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a > svg {
    width: 350px;
    height: 175px;
  }
`;

export const NavWrapper = styled.nav`
  height: 60vh;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AsideFooterWrapper = styled(AsideFooter)`
  height: 10vh;
`;
