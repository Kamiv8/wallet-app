import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import FindGroupForm from '../../organisms/FindGroupForm/FindGroupForm';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { Wrapper } from './FindGroupPage.styles';

const FindGroupPage = () => {
  return (
    <MainTemplate>
      <Typography
        size={'l'}
        weight={700}
        color={'lightBlue'}
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.findGroupPageFindGroup} />
      </Typography>
      <Wrapper>
        <FindGroupForm />
      </Wrapper>
    </MainTemplate>
  );
};

export default FindGroupPage;
