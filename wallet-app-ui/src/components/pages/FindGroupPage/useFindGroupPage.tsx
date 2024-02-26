import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { FoundedGroupType } from '../../../models/resources/foundedGroupType';
import { GroupApi } from '../../../api';
import { RoutesName } from '../../../const/routesName';

export const useFindGroupPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<FoundedGroupType | null>(null);

  const foundedGroupAction = useCallback((data: any) => {
    setState(data);
  }, []);

  const sentToJoinReq = useCallback(async (groupId: string) => {
    await GroupApi.setToJoin({ groupId });
    navigate(RoutesName.ROOT);
  }, []);

  return {
    state,
    foundedGroupAction,
    sentToJoinReq,
  };
};
