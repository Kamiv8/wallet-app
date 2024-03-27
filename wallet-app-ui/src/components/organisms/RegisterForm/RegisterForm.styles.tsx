import styled from 'styled-components';
import { media } from '../../../styles/mediaQueries.helper';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledFormItem = styled.div`
  ${media.tablet`
    &:nth-child(6) {
      margin-top: 20px;    
    }
  `}
`;
