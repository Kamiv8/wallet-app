import styled from 'styled-components';

export const Wrapper = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  position: relative;
  margin: auto;
`;
