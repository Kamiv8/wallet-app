import { ReactComponent as LoginImage } from '../../../assets/images/login.svg';
import { LoginForm } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { RegisterTemplate } from '../../templates';
import { Typography } from '../../atoms';

export const LoginPage = () => {
  return (
    <>
      <RegisterTemplate
        Image={LoginImage}
        Form={<LoginForm />}
        Heading={
          <Typography color={'lightBlue'} size={'xxl'} weight={700}>
            <FormattedMessage {...messages.loginLogin} />
          </Typography>
        }
      />
    </>
  );
};
