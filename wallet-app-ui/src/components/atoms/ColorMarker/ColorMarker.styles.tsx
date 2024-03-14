import styled from 'styled-components';

export const Wrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const Color = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 15px;
  height: 15px;
`;
