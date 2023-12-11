import { RegisterTemplate } from '../../templates';
import { ReactComponent as ForgotPassword } from '../../../assets/images/forgot_password.svg';
import { Typography } from '../../atoms';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { ChangeResetPasswordForm } from '../../organisms';

export const ChangeForgotPasswordPage = () => {
  return (
    <RegisterTemplate
      Image={ForgotPassword}
      Heading={
        <Typography size={'xxl'} weight={700} color={'lightBlue'}>
          <FormattedMessage {...messages.resetPasswordPage} />
        </Typography>
      }
      Form={<ChangeResetPasswordForm />}
    />
  );
};
