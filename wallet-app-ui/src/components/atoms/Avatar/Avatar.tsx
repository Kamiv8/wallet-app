import { StyledAvatar } from './Avatar.styles';

export type TProps = {
  onClick: (e: any) => void;
  selected?: boolean;
  image: string;
};

export const Avatar = (props: TProps) => {
  return <StyledAvatar {...props} />;
};
