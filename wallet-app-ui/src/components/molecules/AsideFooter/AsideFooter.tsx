import {
  FooterWrapper,
  LogoutWrapper,
  UserWrapper,
} from './AsideFooter.styles';
import { ReactComponent as Logout } from '../../../assets/images/logout.svg';
import { UserDataHeader } from '../UserDataHeader/UserDataHeader';
import { FC } from 'react';
type Props = {
  logout: () => void;
};

export const AsideFooter: FC<Props> = ({ logout }) => {
  return (
    <FooterWrapper>
      <LogoutWrapper>
        <Logout onClick={() => logout()} />
      </LogoutWrapper>
      <UserWrapper>
        <UserDataHeader
          avatarNumber={1}
          avatarClick={() => {}}
          fullName={'Lorem ipsum'}
        />
      </UserWrapper>
    </FooterWrapper>
  );
};
