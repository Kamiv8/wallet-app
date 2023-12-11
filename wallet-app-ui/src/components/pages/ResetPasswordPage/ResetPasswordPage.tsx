import { ReactComponent as ForgotPassword } from '../../../assets/images/forgot_password.svg';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { RegisterTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ResetPasswordForm } from '../../organisms';

export const ResetPasswordPage = () => {
  return (
    <RegisterTemplate
      Image={ForgotPassword}
      Heading={
        <Typography size={'xxl'} weight={700} color={'lightBlue'}>
          <FormattedMessage {...messages.resetPasswordPage} />
        </Typography>
      }
      Form={<ResetPasswordForm />}
    />
  );
};
