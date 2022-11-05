import RegisterTemplate from '../../templates/RegisterTemplate/RegisterTemplate';
import { ReactComponent as ForgotPassword } from '../../../assets/images/forgot_password.svg';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Typography from '../../atoms/Typography/Typography';
import ResetPasswordForm from '../../organisms/ResetPasswordForm/ResetPasswordForm';

const ResetPasswordPage = () => {
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

export default ResetPasswordPage;
