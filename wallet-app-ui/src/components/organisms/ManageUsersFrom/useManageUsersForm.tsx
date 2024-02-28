import { useEffect, useState } from 'react';
import { GroupApi } from '../../../api';
import { TSelectItem } from '../../atoms/Select/Select';
import { RoleEnum } from '../../../types/enums';

export const roles: TSelectItem[] = [
  {
    key: RoleEnum.ADMIN,
    description: 'Admin',
  },
  {
    key: RoleEnum.MEMBER,
    description: 'Member',
  },
];

export const useManageUsersForm = () => {
  const initialState = {
    users: [],
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  useEffect(() => {
    (async () => {
      const users = await GroupApi.getUsers();
      setState({
        users: users.data?.response,
      });
    })();
  }, []);

  const deleteUser = async (userId: string) => {
    await GroupApi.deleteUser(userId);
  };

  return {
    state,
    deleteUser,
  };
};
