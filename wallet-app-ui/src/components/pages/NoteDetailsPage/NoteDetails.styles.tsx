import styled from 'styled-components';
import { media } from '../../../styles/mediaQueries.helper';

export const Content = styled.div`
  ${media.desktop`
        height: 80vh;
  grid-column: 1/-1;
  padding: 0 10%;
    `}
`;
