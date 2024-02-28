import { ReactComponent as ChangeUserIcon } from '../../../assets/images/EditUser.svg';
import { RoutesName } from '../../../const/routesName';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { MainTemplate, SettingsTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { NavigationBox } from '../../molecules';

export const SettingsPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.settingsMainPageSettings} />
      </Typography>

      <SettingsTemplate>
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeCategory}
          routeName={RoutesName.CHANGE_CATEGORY}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangePassword}
          routeName={RoutesName.CHANGE_PASSWORD}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeUsername}
          routeName={RoutesName.CHANGE_USERNAME}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeLanguage}
          routeName={RoutesName.CHANGE_LANGUAGE}
        />
      </SettingsTemplate>
    </MainTemplate>
  );
};
