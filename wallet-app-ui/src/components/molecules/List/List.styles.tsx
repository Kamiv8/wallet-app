import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.div`
  height: 400px;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid
    ${({ color, theme }: { theme: TTheme; color: string }) =>
      color === 'darkBlue' ? theme.colors.darkBlue : theme.colors.lightBlue};
`;

export const ListHeader = styled.div`
  margin: 10px 0;
`;

export const ListWrapper = styled.div`
  margin: 10px 0;
`;
