import {
  FooterWrapper,
  LogoutWrapper,
  UserWrapper,
} from './AsideFooter.styles';
import { ReactComponent as Logout } from '../../../assets/images/logout.svg';
import { UserDataHeader } from '../UserDataHeader/UserDataHeader';

export const AsideFooter = () => {
  return (
    <FooterWrapper>
      <LogoutWrapper>
        <Logout />
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
