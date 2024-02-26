import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import { NavigationTemplate } from '../../templates';
import { UserDataHeader } from '../../molecules';
import { GroupNavigation, PersonNavigation } from '../../organisms';
import { useNavigationPage } from './useNavigationPage';

type TProps = {
  closeNav: (open: boolean) => void;
  logout: () => void;
};

export const NavigationPage = (props: TProps) => {
  const { appContext, state } = useNavigationPage();
  return (
    <NavigationTemplate
      title={<FormattedMessage {...messages.navigationPage} />}
      userData={
        <UserDataHeader
          avatarClick={() => {}}
          avatarNumber={state.avatarNumber}
          fullName={state.username}
        />
      }
      personNavigation={<PersonNavigation />}
      hasGroup={!!appContext.state.groupId}
      groupNavigation={<GroupNavigation />}
      closeIcon={<CloseIcon onClick={() => props.closeNav(false)} />}
      logoutIcon={<LogoutIcon onClick={props.logout} />}
    />
  );
};
