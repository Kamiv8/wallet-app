import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.div`
  padding: 60px
    ${({ theme }: { theme: TTheme }) =>
      2 * theme.horizontalMargin.column + 'px'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(28, 26, 50, 1);
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const ContentWrapper = styled.div`
  margin: 50px 0;
  text-align: center;
`;
