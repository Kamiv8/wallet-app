import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import NavigationBox from '../../molecules/NavigationBox/NavigationBox';
import { ReactComponent as ChangeUserIcon } from '../../../assets/images/EditUser.svg';
import { RoutesName } from '../../../const/routesName';
import SettingsTemplate from '../../templates/SettingsTemplate/SettingsTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

const SettingsPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.settingsMainPageSettings} />
      </Typography>

      <SettingsTemplate>
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change Currencies'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change Category'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change icon'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change password'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change username'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change language'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
      </SettingsTemplate>
    </MainTemplate>
  );
};

export default SettingsPage;
