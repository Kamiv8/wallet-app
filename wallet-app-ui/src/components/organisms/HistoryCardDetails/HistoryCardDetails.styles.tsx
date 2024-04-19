import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }: { theme: TTheme }) => theme.gradients.main};
  border-radius: 20px;
  padding: 15px;
  ${media.tablet`
      height: 80vh;
  `}
  ${media.desktop`
      grid-column: 1 / -1;
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0;
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
