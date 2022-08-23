import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  border: 3px solid red;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

//
// ${({ selected, theme }: { selected: boolean } & { theme: TTheme }) =>
// selected && '1px solid red'};
