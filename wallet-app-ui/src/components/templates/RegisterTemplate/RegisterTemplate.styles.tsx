import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.main`
  padding: 60px
    ${({ theme }: { theme: TTheme }) =>
      2 * theme.horizontalMargin.column + 'px'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(28, 26, 50, 1);

  ${media.tablet`
        padding: 100px 12vw;
  `}
  ${media.desktop`
    padding: 100px 10vw;
    flex-direction: row;
   `}
`;

export const ImageElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
        & > svg {
        width: 100%;
    }
    `}

  ${media.desktop`
    width: 50%;
    & > svg {
        width: 100%;
        height: 400px;
    }
  `}
`;

export const HeadingElement = styled.div`
  width: 100%;
  text-align: center;
  ${media.desktop`
    margin-bottom: 50px;
    `}
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;

  ${media.tablet`
    height: 65%;
  `}

  ${media.desktop`
      justify-content: center;
      padding-left: 10%;
      width: 50%;
      max-width: 600px;
      height: 80%;
      margin-top: 50px;      
  `}
`;
