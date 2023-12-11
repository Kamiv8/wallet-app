import { ReactComponent as RegisterImage } from '../../../assets/images/register.svg';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { RegisterTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { RegisterForm } from '../../organisms';

export const RegisterPage = () => {
  return (
    <RegisterTemplate
      Image={RegisterImage}
      Heading={
        <Typography size={'xxl'} weight={700} color={'lightBlue'}>
          <FormattedMessage {...messages.register} />
        </Typography>
      }
      Form={<RegisterForm />}
    />
  );
};
