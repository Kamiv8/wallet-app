import styled, { css } from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { Link } from 'react-router-dom';

type TProps = {
  notificationsNumber?: number;
};

export const Wrapper = styled.div<TProps>`
  width: 100px;
  position: relative;
  height: 100px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.lightBlue};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 10px;
  box-shadow: 0 0 20px ${({ theme }: { theme: TTheme }) => theme.colors.shadow};
  ${({ notificationsNumber }: TProps) =>
    notificationsNumber &&
    css`
      ::before {
        display: flex;
        content: '${notificationsNumber}';
        position: absolute;
        top: -11px;
        right: -11px;
        width: 22px;
        height: 22px;
        background-color: ${({ theme }: { theme: TTheme }) =>
          theme.colors.error};
        justify-content: center;
        align-items: center;
        color: ${({ theme }: { theme: TTheme }) => theme.colors.white};
        font-weight: ${({ theme }: { theme: TTheme }) => theme.weight['700']};
        border-radius: 50%;
        font-size: ${({ theme }: { theme: TTheme }) => theme.fonts.s};
      }
    `}
  }
`;

export const ImageContainer = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
