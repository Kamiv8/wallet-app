import { ReactComponent as LoginImage } from '../../../assets/images/login.svg';
import { LoginForm } from '../../organisms';
import messages from '../../../i18n/messages';
import { RegisterTemplate } from '../../templates';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';

export const LoginPage = () => {
  return (
    <>
      <RegisterTemplate
        Image={LoginImage}
        Form={<LoginForm />}
        Heading={<Heading text={messages.loginLogin} type={HeadingEnum.AUTH} />}
      />
    </>
  );
};
