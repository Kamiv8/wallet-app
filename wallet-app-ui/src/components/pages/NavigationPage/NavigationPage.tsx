import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import { useContext, useLayoutEffect, useState } from 'react';
import { RoleEnum } from '../../../types/enums/role.enum';
import { UserApi } from '../../../api';
import ApplicationContext from '../../../contexts/application.context';
import { NavigationTemplate } from '../../templates';
import { UserDataHeader } from '../../molecules';
import { GroupNavigation, PersonNavigation } from '../../organisms';

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

export const NavigationPage = (props: TProps) => {
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
      username: userData.data?.response.username,
      avatarNumber: userData.data?.response.iconId,
      role: userData.data?.response.role,
      groupId: userData.data?.response.groupId,
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
