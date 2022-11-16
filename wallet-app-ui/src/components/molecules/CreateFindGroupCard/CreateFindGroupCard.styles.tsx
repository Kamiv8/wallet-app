import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const Wrapper = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100px;
  background: ${({ theme }: { theme: TTheme }) => theme.gradients.main};
  padding: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.header`
  display: inline-flex;
  justify-content: center;
`;
