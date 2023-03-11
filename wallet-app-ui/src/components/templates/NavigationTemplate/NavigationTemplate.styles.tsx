import styled, { keyframes } from 'styled-components';
import { TTheme } from '../../../styles/theme';

const toggleAnimation = keyframes`
  from {
    transform: translateX(100%);
    
  }
  to {
    transform: translateX(0);
  }

`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 17px;
  position: fixed;
  transform: translateX(100%);
  top: 0;
  animation: ${toggleAnimation} 0.1s linear forwards;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
`;

export const UserDataWrapper = styled.div`
  width: 100%;
`;

export const NavBoxes = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 10%;
`;
export const GroupNavBoxes = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 20%;
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
