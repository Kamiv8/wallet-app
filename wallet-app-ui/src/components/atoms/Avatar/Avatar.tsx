import { StyledAvatar } from './Avatar.styles';
import Avatar1 from '../../../assets/images/avatars/Avatar-1.svg';
import Avatar2 from '../../../assets/images/avatars/Avatar-2.svg';
import Avatar3 from '../../../assets/images/avatars/Avatar-3.svg';
import Avatar4 from '../../../assets/images/avatars/Avatar-4.svg';
import AvatarG1 from '../../../assets/images/avatars/AvatarG-1.svg';
import AvatarG2 from '../../../assets/images/avatars/AvatarG-2.svg';
import AvatarG3 from '../../../assets/images/avatars/AvatarG-3.svg';
import AvatarG4 from '../../../assets/images/avatars/AvatarG-4.svg';
import { useMemo } from 'react';

export type TProps = {
  onClick?: (e: any) => void;
  selected?: boolean;
  image: number;
  isGroup?: boolean;
};

export const Avatar = (props: TProps) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];
  const groupAvatars = [AvatarG1, AvatarG2, AvatarG3, AvatarG4];

  const avatar = useMemo(() => {
    if (props.isGroup) {
      return groupAvatars[props.image - 1];
    }
    return avatars[props.image - 1];
  }, [props.image]);

  return (
    <StyledAvatar
      image={avatar}
      onClick={(e) => props.onClick && props.onClick(e)}
      selected={props.selected}
    />
  );
};
