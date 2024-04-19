import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { AsideFooter } from '../../molecules/AsideFooter/AsideFooter';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.aside`
  width: 100%;
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
    max-width: 350px;
    max-height: 175px;
  }
`;

export const NavWrapper = styled.nav`
  height: 60vh;
  padding: 0 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.largeScreen`
    padding: 0 30px;
      
  `}
`;

export const AsideFooterWrapper = styled(AsideFooter)`
  height: 10vh;
`;
