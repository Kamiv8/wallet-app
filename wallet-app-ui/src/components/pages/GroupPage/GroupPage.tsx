import { ReactComponent as GroupIcon } from '../../../assets/images/groupImage.svg';
import { Wrapper } from './GroupPage.styles';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { CreateFindGroupCard } from '../../molecules';

export const GroupPage = () => {
  const navigate = useNavigate();
  return (
    <MainTemplate>
      <Typography
        size={'l'}
        uppercase
        weight={700}
        color={'lightBlue'}
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.groupPageGroup} />
      </Typography>
      <Wrapper>
        <GroupIcon />
        <CreateFindGroupCard
          onClick={() => navigate(RoutesName.CREATE_GROUP)}
          title={{ ...messages.groupPageCreateGroup }}
          description={{ ...messages.groupPageCreateGroupDescription }}
        />
        <CreateFindGroupCard
          onClick={() => navigate(RoutesName.FIND_GROUP)}
          title={{ ...messages.groupPageFindGroup }}
          description={{ ...messages.groupPageFindGroupDescription }}
        />
      </Wrapper>
    </MainTemplate>
  );
};
