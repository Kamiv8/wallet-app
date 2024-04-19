import { ReactComponent as RegisterImage } from '../../../assets/images/register.svg';
import messages from '../../../i18n/messages';
import { RegisterTemplate } from '../../templates';
import { RegisterForm } from '../../organisms';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';

export const RegisterPage = () => {
  return (
    <RegisterTemplate
      Image={RegisterImage}
      Heading={<Heading text={messages.register} type={HeadingEnum.AUTH} />}
      Form={<RegisterForm />}
    />
  );
};
