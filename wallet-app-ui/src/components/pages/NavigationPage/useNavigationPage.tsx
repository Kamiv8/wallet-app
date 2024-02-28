import { useContext, useLayoutEffect, useState } from 'react';
import ApplicationContext from '../../../contexts/application.context';
import { useFetch } from '../../../hooks';
import { LocalstorageHelper } from '../../../helpers';
import { LocalstorageEnum, UserIconTypeEnum } from '../../../types/enums';
import { UserApi } from '../../../api';
import { CustomString } from '../../../overrides/string.override';

export const useNavigationPage = () => {
  const appContext = useContext(ApplicationContext);
  const { callToApi } = useFetch();
  const [username, iconType] = LocalstorageHelper.getItems([
    LocalstorageEnum.USERNAME,
    LocalstorageEnum.ICON_TYPE,
  ]);

  const initialState = {
    username,
    avatarNumber: +iconType as UserIconTypeEnum,
    groupId: CustomString.Empty,
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  async function getUserData() {
    if (username && iconType) return;
    const userData = await callToApi(UserApi.getUserData());
    LocalstorageHelper.setItem(
      LocalstorageEnum.USERNAME,
      userData.data?.username || CustomString.Empty,
    );
    LocalstorageHelper.setItem(
      LocalstorageEnum.ICON_TYPE,
      userData.data?.iconType.toString() || CustomString.Empty,
    );
    setState((prev) => ({
      ...prev,
      username: userData.data?.username ?? CustomString.Empty,
      avatarNumber: userData.data?.iconType ?? 0,
      groupId: userData.data?.groupId ?? CustomString.Empty,
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
