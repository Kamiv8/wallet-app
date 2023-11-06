import MainTemplate from '../../../templates/MainTemplate/MainTemplate';
import Typography from '../../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../../i18n/messages';
import { useCallback, useEffect, useState } from 'react';
import { GroupApi } from '../../../../api/group.api';
import { JoinUserNotificationDto } from '../../../../models/dtos/joinUserNotificationDto';
import JoinUserNotificationCard from '../../../organisms/JoinUserNotificationCard/JoinUserNotificationCard';

const NotificationPanelPage = () => {
  const [state, setState] = useState<JoinUserNotificationDto[]>([]);
  const [refresher, setRefresher] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await GroupApi.joinRequestNotification();
      setState(data.data?.response);
    })();
  }, [refresher]);

  const acceptUserAction = useCallback(
    async (userId: string, notificationId: string) => {
      await GroupApi.acceptUser({ userId, notificationId });
      setRefresher(!refresher);
    },
    [],
  );

  const rejectUserAction = useCallback(
    async (userId: string, notificationId: string) => {
      await GroupApi.rejectUser({ userId, notificationId });
      setRefresher(!refresher);
    },
    [],
  );

  return (
    <MainTemplate isGroup>
      <Typography
        size={'l'}
        weight={700}
        color={'lightBlue'}
        uppercase
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.notificationPageNotificationPanel} />
      </Typography>

      {state.map((x) => (
        <JoinUserNotificationCard
          key={x.notificationId}
          iconId={x.iconId}
          email={x.email}
          username={x.username}
          userId={x.userId}
          notificationId={x.notificationId}
          accept={acceptUserAction}
          reject={rejectUserAction}
        />
      ))}
    </MainTemplate>
  );
};

export default NotificationPanelPage;
