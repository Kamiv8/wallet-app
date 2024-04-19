import styled from 'styled-components';
import { media } from '../mediaQueries.helper';

export const CardWrapperContent = styled.div`
  ${media.desktop`
      grid-column: 1/-1;
      height: 80vh;
      padding: 0 5%;
 `}
`;
