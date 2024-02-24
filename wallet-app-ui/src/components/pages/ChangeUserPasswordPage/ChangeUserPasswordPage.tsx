import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeUserPasswordForm } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

export const ChangeUserPasswordPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.settingsMainPageChangePassword} />
      </Typography>
      <ChangeUserPasswordForm />
    </MainTemplate>
  );
};
