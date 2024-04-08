import styled from 'styled-components';

export const Wrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 10px;
  flex-wrap: wrap;
`;
