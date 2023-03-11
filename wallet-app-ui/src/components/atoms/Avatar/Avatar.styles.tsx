import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

type TStyledAvatarProps = {
  onClick: (e: any) => void;
  selected?: boolean;
  image: string;
};

export const StyledAvatar = styled.div<TStyledAvatarProps>`
  cursor: pointer;
  border: ${({ selected, theme }: TStyledAvatarProps & { theme: TTheme }) =>
    selected && `3px solid ${theme.colors.orange}`};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${({ image }: TStyledAvatarProps) => image});
  background-position: center;
`;
