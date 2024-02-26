import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { Wrapper } from './FindGroupPage.styles';
import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { FindGroupForm } from '../../organisms';
import { FoundedGroup } from '../../molecules';
import { useFindGroupPage } from './useFindGroupPage';

export const FindGroupPage = () => {
  const { state, foundedGroupAction, sentToJoinReq } = useFindGroupPage();
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
