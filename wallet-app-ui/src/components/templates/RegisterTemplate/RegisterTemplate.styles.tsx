import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.main`
  padding: 60px
    ${({ theme }: { theme: TTheme }) =>
      2 * theme.horizontalMargin.column + 'px'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(28, 26, 50, 1);
`;

export const ImageElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadingElement = styled.div`
  width: 100%;
  text-align: center;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`;
