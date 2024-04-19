import styled from 'styled-components';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
  ${media.desktop`
      grid-column: 1/-1;
      height: 80vh;
      padding: 0 10%;
    `}
`;
