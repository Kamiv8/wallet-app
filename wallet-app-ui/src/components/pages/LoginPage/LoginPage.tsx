import RegisterTemplate from '../../templates/RegisterTemplate/RegisterTemplate';
import { ReactComponent as LoginImage } from '../../../assets/images/login.svg';
import { LoginForm } from '../../organisms/LoginForm/LoginForm';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

const LoginPage = () => {
  return (
    <RegisterTemplate
      Image={LoginImage}
      Form={<LoginForm />}
      Heading={
        <Typography color={'lightBlue'} size={'xxl'} weight={700}>
          <FormattedMessage {...messages.login} />
        </Typography>
      }
    />
  );
};

export default LoginPage;
