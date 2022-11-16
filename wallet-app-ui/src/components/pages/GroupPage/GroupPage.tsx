import { ReactComponent as GroupIcon } from '../../../assets/images/groupImage.svg';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { Wrapper } from './GroupPage.styles';
import CreateFindGroupCard from '../../molecules/CreateFindGroupCard/CreateFindGroupCard';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

const GroupPage = () => {
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
          onClick={() => {}}
          title={{ ...messages.groupPageCreateGroup }}
          description={{ ...messages.groupPageCreateGroupDescription }}
        />
        <CreateFindGroupCard
          onClick={() => {}}
          title={{ ...messages.groupPageFindGroup }}
          description={{ ...messages.groupPageFindGroupDescription }}
        />
      </Wrapper>
    </MainTemplate>
  );
};

export default GroupPage;
