import styled from 'styled-components';
import { Typography } from '../../atoms';
import { media } from '../../../styles/mediaQueries.helper';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  ${media.desktop`
      grid-column: 1 / -1;
    `}
`;

export const NoElementsText = styled(Typography)`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop` 
      grid-column: 1 / -1;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${media.desktop`
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      gap: 20px;
      justify-content: center;
      height: 80vh;
  `}
`;
