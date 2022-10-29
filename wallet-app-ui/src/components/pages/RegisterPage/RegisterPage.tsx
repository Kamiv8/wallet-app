import RegisterTemplate from '../../templates/RegisterTemplate/RegisterTemplate';
import { ReactComponent as RegisterImage } from '../../../assets/images/register.svg';
import Typography from '../../atoms/Typography/Typography';
import RegisterForm from '../../organisms/RegisterForm/RegisterForm';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

const RegisterPage = () => {
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

export default RegisterPage;
