import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import FindGroupForm from '../../organisms/FindGroupForm/FindGroupForm';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { Wrapper } from './FindGroupPage.styles';
import { useCallback, useState } from 'react';
import { FoundedGroupType } from '../../../models/resources/foundedGroupType';
import FoundedGroup from '../../molecules/FoundedGroup/FoundedGroup';
import { GroupApi } from '../../../api/group.api';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

const FindGroupPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<FoundedGroupType | null>(null);

  const foundedGroupAction = useCallback((data: any) => {
    setState(data);
  }, []);

  const sentToJoinReq = useCallback(async (groupId: string) => {
    await GroupApi.setToJoin({ groupId });
    navigate(RoutesName.ROOT);
  }, []);

  return (
    <MainTemplate>
      <Typography
        size={'l'}
        weight={700}
        uppercase
        color={'lightBlue'}
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.findGroupPageFindGroup} />
      </Typography>
      <Wrapper>
        {state === null && <FindGroupForm foundedGroup={foundedGroupAction} />}
        {state && <FoundedGroup data={state} onClick={sentToJoinReq} />}
      </Wrapper>
    </MainTemplate>
  );
};

export default FindGroupPage;
