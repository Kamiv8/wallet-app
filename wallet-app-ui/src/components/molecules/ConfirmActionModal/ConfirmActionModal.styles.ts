import styled from 'styled-components';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  ${media.tablet`
        & > svg {
        width: 300px;
        height: 300px;
    }
  `}
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;
