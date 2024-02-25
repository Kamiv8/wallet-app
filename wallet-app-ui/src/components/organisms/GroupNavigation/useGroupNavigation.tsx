import { useContext, useEffect, useState } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { TBoxes } from '../PersonNavigation/PersonNavigation';
import { GroupApi } from '../../../api';

export const useGroupNavigation = () => {
  const appContext = useContext(ApplicationContext);
  const [, setState] = useState<number | undefined>(undefined);
  const boxes: TBoxes[] = [];

  useEffect(() => {
    (async () => {
      const data = await GroupApi.getJoinUserNotificationCount();
      setState(data.data?.response.count);
    })();
  }, []);

  return {
    boxes,
    appContext,
  };
};
