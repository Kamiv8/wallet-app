import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65px;
  height: 42px;
  text-align: center;
  row-gap: 2px;
`;
export const IconContainer = styled.div<{ icon: any }>`
  width: 26px;
  height: 26px;
  background: url(${({ icon }: any) => icon}) center center no-repeat;
  background-size: 100%;
  margin: auto;
`;
