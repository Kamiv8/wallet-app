import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  border-top: 3px solid
    ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
`;

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 3px solid
    ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  height: 100%;
  width: 30%;
  & > svg {
    cursor: pointer;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 0 10px;
`;
