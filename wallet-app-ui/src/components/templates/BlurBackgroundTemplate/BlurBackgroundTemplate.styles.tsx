import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: TTheme }) =>
    theme.colors.backgroundBlur};
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  position: fixed;
`;

export const Wrapper = styled.div`
  height: 60%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 5px;
  border: 1px solid ${({ theme }: { theme: TTheme }) => theme.colors.lightBlue};
  padding: 17px 17px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  position: fixed;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
