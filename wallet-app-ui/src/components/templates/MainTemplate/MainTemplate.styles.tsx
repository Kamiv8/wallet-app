import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const MobileWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px 17px 22vh 17px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
`;

export const DesktopWrapper = styled.main`
  display: flex;
`;

export const DesktopContent = styled.div`
  width: 100%;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  padding: 30px 50px;
`;
