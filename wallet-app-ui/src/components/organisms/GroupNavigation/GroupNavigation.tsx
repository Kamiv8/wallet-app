import { NavigationBox } from '../../molecules';
import { RoleEnum } from '../../../types/enums';
import { Wrapper } from './GroupNavigation.styles';
import { useGroupNavigation } from './useGroupNavigation';

export const GroupNavigation = () => {
  const { boxes, appContext } = useGroupNavigation();
  return (
    <Wrapper>
      {boxes.map((b) => (
        <NavigationBox
          key={b.name.id}
          Image={b.image}
          name={b.name}
          routeName={b.route}
        />
      ))}
      {+appContext.state.userRole === RoleEnum.ADMIN && (
        <>
          {/*<NavigationBox*/}
          {/*  Image={SettingsIcon}*/}
          {/*  name={'Settings'}*/}
          {/*  routeName={GroupRoutesName.SETTINGS}*/}
          {/*/>*/}
          {/*<NavigationBox*/}
          {/*  Image={NotificationIcon}*/}
          {/*  name={'Notifications'}*/}
          {/*  routeName={GroupRoutesName.NOTIFICATIONS}*/}
          {/*  notificationsNumber={state}*/}
          {/*/>*/}
        </>
      )}
    </Wrapper>
  );
};
