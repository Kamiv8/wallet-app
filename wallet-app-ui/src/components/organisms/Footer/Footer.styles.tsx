import styled from 'styled-components';
import footerBlue from '../../../assets/images/footerBlue.svg';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.footer`
  background-image: url(${footerBlue});
  position: fixed;
  width: 100%;
  height: 20vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
