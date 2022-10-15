import styled from 'styled-components';
import footerBlue from '../../../assets/images/footerBlue.svg';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.footer`
  background-image: url(${footerBlue});
  position: fixed;
  width: 100vw;
  height: 20vh;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
`;

export const Circle = styled.div`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  width: 75px;
  height: 75px;
  position: absolute;
  bottom: 50px;
  left: calc(50% - (75px / 2));
  border-radius: 50%;
  border: 10px solid ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
`;

export const NavigationContent = styled.div`
  display: flex;
  width: 100%;
  column-gap: 17px;
  align-items: center;
  position: absolute;
  bottom: 25px;
`;

export const NavColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
