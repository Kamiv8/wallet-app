import styled from 'styled-components';
import { media } from '../../../styles/mediaQueries.helper';

export const DefaultTransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${media.desktop`
      grid-column: 1/-1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 10%;
      gap: 5%;
      height: 80vh;
      overflow-y: auto;
  `}
`;
