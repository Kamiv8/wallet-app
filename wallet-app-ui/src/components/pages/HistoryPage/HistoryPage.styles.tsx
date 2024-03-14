import styled from 'styled-components';
import { Typography } from '../../atoms';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NoElementsText = styled(Typography)`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
