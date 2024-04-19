import styled from 'styled-components';
import { Button } from '../../components/atoms';
import { media } from '../mediaQueries.helper';

export const StyledButton = styled(Button)`
  position: fixed;
  right: 17px;
  bottom: 17vh;
  ${media.tablet`
      right: 30px;
      bottom: 50px;
    `}
`;
