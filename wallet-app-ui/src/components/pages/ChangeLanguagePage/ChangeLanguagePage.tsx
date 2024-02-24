import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeLanguageForm } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

export const ChangeLanguagePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.changeLanguagePageChangeLanguage} />
      </Typography>
      <ChangeLanguageForm />
    </MainTemplate>
  );
};
