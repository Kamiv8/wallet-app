import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeCategoryForm } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

export const ChangeCategoryPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.changeCategoryPageTitle} />
      </Typography>
      <ChangeCategoryForm />
    </MainTemplate>
  );
};
