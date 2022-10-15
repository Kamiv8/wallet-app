import NavigationTemplate from '../../templates/NavigationTemplate/NavigationTemplate';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import UserDataHeader from '../../molecules/UserDataHeader/UserDataHeader';
import PersonNavigation from '../../organisms/PersonNavigation/PersonNavigation';

const NavigationPage = () => {
  // todo generować to jako modal a nie jako page
  return (
    <NavigationTemplate
      title={<FormattedMessage {...messages.navigationPage} />}
      userData={
        <UserDataHeader
          avatarClick={() => console.log('x')}
          avatarNumber={2}
          fullName={'Lorem ipsum'}
        />
      }
      personNavigation={<PersonNavigation />}
      closeIcon={<CloseIcon />}
      logoutIcon={<LogoutIcon />}
    />
  );
};

export default NavigationPage;
