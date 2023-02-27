import { Avatar } from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import Avatar1 from '../../../assets/images/avatars/Avatar-1.svg';
import Avatar2 from '../../../assets/images/avatars/Avatar-2.svg';
import Avatar3 from '../../../assets/images/avatars/Avatar-3.svg';
import Avatar4 from '../../../assets/images/avatars/Avatar-4.svg';
import { ReactNode, useMemo } from 'react';
import { Wrapper } from './UserDataHeader.styles';

export type TProps = {
  avatarClick: () => void;
  avatarNumber: 0 | 1 | 2 | 3;
  fullName: ReactNode;
};

const UserDataHeader = (props: TProps) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];

  const avatar = useMemo(() => {
    return avatars[props.avatarNumber - 1];
  }, [props.avatarNumber]);

  return (
    <Wrapper>
      <Avatar onClick={props.avatarClick} image={avatar} />
      <Typography weight={700} color={'darkBlue'} size={'l'}>
        {props.fullName}
      </Typography>
    </Wrapper>
  );
};

export default UserDataHeader;
