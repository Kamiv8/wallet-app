import { useContext, useLayoutEffect, useState } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { useFetch } from '../../../hooks';
import { LocalstorageHelper } from '../../../helpers';
import { LocalstorageEnum, UserIconTypeEnum } from '../../../types/enums';
import { UserApi } from '../../../api';

type TState = {
  username: string;
  avatarNumber: UserIconTypeEnum;
  groupId?: string | null;
};
export const useNavigationPage = () => {
  const appContext = useContext(ApplicationContext);
  const { callToApi } = useFetch();
  const [username, iconType] = LocalstorageHelper.getItems([
    LocalstorageEnum.USERNAME,
    LocalstorageEnum.ICON_TYPE,
  ]);
  const [state, setState] = useState<TState>({
    username,
    avatarNumber: +iconType,
    groupId: null,
  });

  async function getUserData() {
    if (username && iconType) return;
    const userData = await callToApi(UserApi.getUserData());
    LocalstorageHelper.setItem(
      LocalstorageEnum.USERNAME,
      userData.data?.username || '',
    );
    LocalstorageHelper.setItem(
      LocalstorageEnum.ICON_TYPE,
      userData.data?.iconType.toString() || '',
    );
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

  return {
    appContext,
    state,
  };
};
