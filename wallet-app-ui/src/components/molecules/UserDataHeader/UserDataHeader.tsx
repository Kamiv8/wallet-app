import { Avatar, Typography } from '../../atoms';
import { ReactNode } from 'react';
import { Wrapper } from './UserDataHeader.styles';

export type TProps = {
  avatarClick: () => void;
  avatarNumber: 0 | 1 | 2 | 3;
  fullName: ReactNode;
};

export const UserDataHeader = (props: TProps) => {
  return (
    <Wrapper>
      <Avatar onClick={props.avatarClick} image={props.avatarNumber} />
      <Typography weight={700} color={'darkBlue'} size={'l'}>
        {props.fullName}
      </Typography>
    </Wrapper>
  );
};
