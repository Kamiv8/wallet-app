import { TBoxes } from '../PersonNavigation/PersonNavigation';
import { ReactComponent as SettingsIcon } from '../../../assets/images/navigationIcons/settings.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/images/navigationIcons/notification.svg';
import { GroupRoutesName } from '../../../const/routesName';
import { NavigationBox } from '../../molecules';
import { useContext, useEffect, useState } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { RoleEnum } from '../../../types/enums/role.enum';
import { Wrapper } from './GroupNavigation.styles';
import { GroupApi } from '../../../api';

export const GroupNavigation = () => {
  const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<number | undefined>(undefined);
  const boxes: TBoxes[] = [];

  useEffect(() => {
    (async () => {
      const data = await GroupApi.getJoinUserNotificationCount();
      setState(data.data?.response.count);
    })();
  }, []);

  return (
    <Wrapper>
      {boxes.map((b) => (
        <NavigationBox
          key={b.name}
          Image={b.image}
          name={b.name}
          routeName={b.route}
        />
      ))}
      {+appContext.state.userRole === RoleEnum.ADMIN && (
        <>
          <NavigationBox
            Image={SettingsIcon}
            name={'Settings'}
            routeName={GroupRoutesName.SETTINGS}
          />
          <NavigationBox
            Image={NotificationIcon}
            name={'Notifications'}
            routeName={GroupRoutesName.NOTIFICATIONS}
            notificationsNumber={state}
          />
        </>
      )}
    </Wrapper>
  );
};
