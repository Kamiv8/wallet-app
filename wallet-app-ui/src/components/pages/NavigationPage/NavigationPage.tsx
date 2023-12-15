import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import { useContext, useLayoutEffect, useState } from 'react';
import { UserApi } from '../../../api';
import ApplicationContext from '../../../contexts/application.context';
import { NavigationTemplate } from '../../templates';
import { UserDataHeader } from '../../molecules';
import { GroupNavigation, PersonNavigation } from '../../organisms';
import { useFetch } from '../../../hooks';
import { UserIconTypeEnum } from '../../../types/enums/userIconType.enum';

type TProps = {
  closeNav: (open: boolean) => void;
  logout: () => void;
};

type TState = {
  username: string;
  avatarNumber: UserIconTypeEnum;
  groupId?: string | null;
};

export const NavigationPage = (props: TProps) => {
  const appContext = useContext(ApplicationContext);
  const { callToApi } = useFetch();
  const username = localStorage.getItem('username') ?? '';
  const iconType =
    localStorage.getItem('iconType') !== null
      ? +localStorage.getItem('iconType')!
      : 0;
  const [state, setState] = useState<TState>({
    username,
    avatarNumber: iconType,
    groupId: null,
  });

  async function getUserData() {
    if (username && iconType) return;
    const userData = await callToApi(UserApi.getUserData());
    localStorage.setItem('username', userData.data?.username || ''); // TODO move storage name into another file
    localStorage.setItem('iconType', userData.data?.iconType.toString() || '');
    setState((prev) => ({
      ...prev,
      username: userData.data?.username ?? '',
      avatarNumber: userData.data?.iconType ?? 0,
      groupId: userData.data?.groupId,
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
