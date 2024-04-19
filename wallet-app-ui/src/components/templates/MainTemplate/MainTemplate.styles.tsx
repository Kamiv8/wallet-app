import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { media } from '../../../styles/mediaQueries.helper';

export const MobileWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px 17px 22vh 17px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
`;

export const DesktopWrapper = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  ${media.largeScreen`
      grid-template-columns: 1fr 5fr;
    `}
`;

export const DesktopContent = styled.div`
  width: 100%;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  padding: 30px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
