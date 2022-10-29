import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import upArrowIcon from '../../../assets/images/upArrow.svg';
import downArrowIcon from '../../../assets/images/downArrow.svg';

export const Wrapper = styled.div<{ price: number }>`
  width: 100%;
  min-height: 120px;
  background: url(${({ price }: { price: number }) =>
        price >= 0 ? upArrowIcon : downArrowIcon})
      no-repeat top right 10px,
    ${({ theme }: { theme: TTheme }) => theme.gradients.main};
  background-size: auto 100%;
  border-radius: 10px;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
