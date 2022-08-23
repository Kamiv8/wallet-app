import { ReactComponent as Avatar1 } from '../../../assets/images/avatars/Avatar-1.svg';
import { ReactComponent as Avatar2 } from '../../../assets/images/avatars/Avatar-2.svg';
import { ReactComponent as Avatar3 } from '../../../assets/images/avatars/Avatar-3.svg';
import { ReactComponent as Avatar4 } from '../../../assets/images/avatars/Avatar-4.svg';
import { StyledAvatar, StyledWrapper } from './AvatarPicker.styles';

export type TProps = {
  selected: 1 | 2 | 3 | 4;
  onClick: (e: any) => void;
};

const AvatarPicker = ({ selected, onClick }: TProps) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];

  return (
    <StyledWrapper>
      {avatars.map((Item, index) => (
        <StyledAvatar
          key={index}
          selected={selected === index + 1}
          onClick={onClick}
        >
          <Item />
        </StyledAvatar>
      ))}
    </StyledWrapper>
  );
};

export default AvatarPicker;
