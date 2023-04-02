import NavigationTemplate from '../../templates/NavigationTemplate/NavigationTemplate';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import UserDataHeader from '../../molecules/UserDataHeader/UserDataHeader';
import PersonNavigation from '../../organisms/PersonNavigation/PersonNavigation';
import { useContext, useLayoutEffect, useState } from 'react';
import { RoleEnum } from '../../../types/enums/role.enum';
import { UserApi } from '../../../api/user.api';
import ApplicationContext from '../../../contexts/application.context';
import GroupNavigation from '../../organisms/GroupNavigation/GroupNavigation';

type TProps = {
  closeNav: (open: boolean) => void;
  logout: () => void;
};

type TState = {
  username: string;
  avatarNumber: 0 | 1 | 2 | 3;
  groupId: number | null;
  role: RoleEnum;
};

const NavigationPage = (props: TProps) => {
  const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<TState>({
    username: '',
    avatarNumber: 0,
    groupId: null,
    role: RoleEnum.NONE,
  });

  async function getUserData() {
    const userData = await UserApi.getUserData();
    setState((prev) => ({
      ...prev,
      username: userData.data.username,
      avatarNumber: userData.data.iconId,
      role: userData.data.role,
      groupId: userData.data.groupId,
    }));
  }

  useLayoutEffect(() => {
    (async () => {
      await getUserData();
    })();
  }, []);

  return (
    <NavigationTemplate
      title={<FormattedMessage {...messages.navigationPage} />}
      userData={
        <UserDataHeader
          avatarClick={() => console.log('x')}
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

export default NavigationPage;
