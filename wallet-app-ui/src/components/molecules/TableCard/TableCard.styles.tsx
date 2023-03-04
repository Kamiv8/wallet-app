import styled from 'styled-components';

export const Wrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  padding: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 20px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const ListWrapper = styled.div`
  margin: 15px;
  width: 100%;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li<{ color: string }>`
  margin: 10px 0;
  display: flex;
  &:before {
    content: '\\2022';
    color: ${({ color }) => color};
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 1em;
    height: 100%;
    margin-left: -1em;
  }
`;
