import Avatar1 from '../../../assets/images/avatars/Avatar-1.svg';
import Avatar2 from '../../../assets/images/avatars/Avatar-2.svg';
import Avatar3 from '../../../assets/images/avatars/Avatar-3.svg';
import Avatar4 from '../../../assets/images/avatars/Avatar-4.svg';
import AvatarG1 from '../../../assets/images/avatars/AvatarG-1.svg';
import AvatarG2 from '../../../assets/images/avatars/AvatarG-2.svg';
import AvatarG3 from '../../../assets/images/avatars/AvatarG-3.svg';
import AvatarG4 from '../../../assets/images/avatars/AvatarG-4.svg';
import { StyledWrapper } from './AvatarPicker.styles';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { useCallback } from 'react';
import { TSelectedIcon } from '../../organisms/RegisterForm/RegisterForm';
import { FieldType } from '../../../hooks/useForm';

export type TProps = {
  selected: 0 | 1 | 2 | 3 | 4;
  onClick: (index: TSelectedIcon, icon: string, type: FieldType) => void;
  variant: 'single' | 'group';
};

const AvatarPicker = (props: TProps) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];
  const groupAvatars = [AvatarG1, AvatarG2, AvatarG3, AvatarG4];

  const selectIcon = useCallback((index: TSelectedIcon) => {
    props.onClick(index, 'icon', FieldType.Icon);
  }, []);

  return (
    <StyledWrapper>
      {props.variant === 'single' && (
        <>
          {avatars.map((Item, index) => (
            <Avatar
              key={index}
              selected={props.selected === index + 1}
              onClick={() => selectIcon((index + 1) as TSelectedIcon)}
              image={index + 1}
            />
          ))}
        </>
      )}

      {props.variant === 'group' && (
        <>
          {groupAvatars.map((Item, index) => (
            <Avatar
              key={index}
              selected={props.selected === index + 1}
              onClick={() => selectIcon((index + 1) as TSelectedIcon)}
              image={index + 1}
            />
          ))}
        </>
      )}
    </StyledWrapper>
  );
};

export default AvatarPicker;
